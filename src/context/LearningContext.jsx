import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { COURSES } from '../data/coursesData';

const LearningContext = createContext();

const DEFAULT_COMPLETED_TASKS = {
  'html-d1-t1': true,
  'html-d1-t2': true,
  'html-d2-t1': true,
  'css-d1-t1': true,
  'css-d1-t2': true,
  'js-d1-t1': true,
  'js-d2-t1': true,
  'tw-d1-t1': true,
};

export function LearningProvider({ children }) {
  // Store completed task IDs: Set or Record
  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('naveen_completed_tasks');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn('Error loading completed tasks from localStorage:', e);
    }
    return DEFAULT_COMPLETED_TASKS;
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('naveen_completed_tasks', JSON.stringify(completedTasks || {}));
      }
    } catch (e) {
      console.warn('Error saving completed tasks to localStorage:', e);
    }
  }, [completedTasks]);

  const toggleTaskCompletion = (taskId) => {
    if (!taskId) return;
    setCompletedTasks(prev => {
      const next = { ...(prev || {}) };
      if (next[taskId]) {
        delete next[taskId];
      } else {
        next[taskId] = true;
        // Fire subtle celebratory confetti
        try {
          const fire = typeof confetti === 'function' ? confetti : confetti?.default;
          if (fire) {
            fire({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.8 },
              colors: ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4']
            });
          }
        } catch (e) {
          // Ignore confetti errors
        }
      }
      return next;
    });
  };

  const isTaskCompleted = (taskId) => {
    if (!taskId || !completedTasks) return false;
    return !!completedTasks[taskId];
  };

  const resetAllProgress = () => {
    setCompletedTasks({});
  };

  const markAllTasksForDay = (courseId, dayNumber) => {
    const course = COURSES[courseId];
    if (!course || !course.days) return;
    const day = course.days.find(d => d.day === Number(dayNumber));
    if (!day || !day.tasks) return;

    setCompletedTasks(prev => {
      const next = { ...(prev || {}) };
      day.tasks.forEach(t => {
        if (!t.isComingSoon) {
          next[t.id] = true;
        }
      });
      return next;
    });

    try {
      const fire = typeof confetti === 'function' ? confetti : confetti?.default;
      if (fire) {
        fire({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      }
    } catch (e) {}
  };

  // Day progress calculator
  const getDayProgress = (courseId, dayNumber) => {
    const course = COURSES[courseId];
    if (!course || !course.days) return { totalTasks: 0, completedCount: 0, percentage: 0 };
    const day = course.days.find(d => d.day === Number(dayNumber));
    if (!day || !day.tasks || day.tasks.length === 0) {
      return { totalTasks: 0, completedCount: 0, percentage: 0 };
    }

    const validTasks = day.tasks.filter(t => !t.isComingSoon);
    const totalTasks = validTasks.length;
    if (totalTasks === 0) return { totalTasks: 0, completedCount: 0, percentage: 0 };

    const tasksMap = completedTasks || {};
    const completedCount = validTasks.filter(t => tasksMap[t.id]).length;
    const percentage = Math.round((completedCount / totalTasks) * 100);

    return { totalTasks, completedCount, percentage };
  };

  // Course progress calculator
  const getCourseProgress = (courseId) => {
    const course = COURSES[courseId];
    if (!course || !course.days) return { totalTasks: 0, completedCount: 0, percentage: 0, totalDays: 0, completedDays: 0 };

    let totalTasks = 0;
    let completedCount = 0;
    let completedDays = 0;
    const tasksMap = completedTasks || {};

    course.days.forEach(day => {
      const validTasks = (day.tasks || []).filter(t => !t.isComingSoon);
      totalTasks += validTasks.length;
      let dayCompleted = 0;
      validTasks.forEach(t => {
        if (tasksMap[t.id]) {
          completedCount++;
          dayCompleted++;
        }
      });
      if (validTasks.length > 0 && dayCompleted === validTasks.length) {
        completedDays++;
      }
    });

    const percentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
    return {
      totalTasks,
      completedCount,
      percentage,
      totalDays: course.days.length,
      completedDays
    };
  };

  // Overall platform statistics
  const overallStats = useMemo(() => {
    let totalTechnologies = Object.keys(COURSES).length;
    let totalLearningDays = 0;
    let totalTasks = 0;
    let completedCount = 0;
    const tasksMap = completedTasks || {};

    Object.values(COURSES).forEach(course => {
      totalLearningDays += (course.days || []).length;
      (course.days || []).forEach(day => {
        const validTasks = (day.tasks || []).filter(t => !t.isComingSoon);
        totalTasks += validTasks.length;
        validTasks.forEach(t => {
          if (tasksMap[t.id]) {
            completedCount++;
          }
        });
      });
    });

    const percentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

    return {
      totalTechnologies,
      totalLearningDays,
      totalTasks,
      completedTasks: completedCount,
      overallProgress: percentage
    };
  }, [completedTasks]);

  return (
    <LearningContext.Provider
      value={{
        completedTasks,
        toggleTaskCompletion,
        isTaskCompleted,
        resetAllProgress,
        markAllTasksForDay,
        getDayProgress,
        getCourseProgress,
        overallStats,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}
