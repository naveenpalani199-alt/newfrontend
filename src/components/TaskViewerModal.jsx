import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle,
  Circle,
  Monitor,
  Tablet,
  Smartphone,
  Code2,
  Eye,
  Copy,
  Check,
  RefreshCw
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { getTaskUrl } from '../utils/taskPaths';

export default function TaskViewerModal({ task, course, onClose }) {
  const { isTaskCompleted, toggleTaskCompletion } = useLearning();
  const [deviceMode, setDeviceMode] = useState('desktop'); // desktop | tablet | mobile
  const [viewMode, setViewMode] = useState('preview'); // preview | code
  const [fileContent, setFileContent] = useState('');
  const [isLoadingCode, setIsLoadingCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(Date.now());
  const [fileError, setFileError] = useState('');
  const resolvedPath = task?.path ? getTaskUrl(task.path) : '';
  const isHtml = task?.type === 'html' && /\.html?$/i.test(task.path || '');
  const isSourceFile = !isHtml;

  useEffect(() => {
    if (!task?.path) return undefined;
    const controller = new AbortController();
    setFileError('');
    if (viewMode === 'code' || isSourceFile) setIsLoadingCode(true);

    fetch(resolvedPath, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`File request failed (${res.status})`);
        return viewMode === 'code' || isSourceFile ? res.text() : null;
      })
      .then((text) => {
        if (text !== null) setFileContent(text);
        setIsLoadingCode(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setFileError(err.message || 'Could not load this task file.');
        setFileContent(`Unable to load ${task.path}. Check that the task file is available.`);
        setIsLoadingCode(false);
      });

    return () => controller.abort();
  }, [task?.path, resolvedPath, viewMode, isSourceFile]);

  // If the file is txt or sql, default view mode to code
  useEffect(() => {
    if (!isHtml) {
      setViewMode('code');
    } else {
      setViewMode('preview');
    }
  }, [isHtml]);

  if (!task) return null;
  const completed = isTaskCompleted(task.id);

  const copyPath = () => {
    navigator.clipboard.writeText(task.path);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const deviceWidths = {
    desktop: 'w-full',
    tablet: 'max-w-[768px]',
    mobile: 'max-w-[390px]',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/90">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex-shrink-0">
              TASK {task.taskNumber}
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                {task.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate max-w-xs sm:max-w-md">
                {task.path}
              </p>
            </div>
          </div>

          {/* Center Device & View Controls (for HTML tasks) */}
          <div className="flex items-center gap-2">
            {isHtml && (
              <div className="hidden md:flex items-center bg-slate-200 dark:bg-slate-800 rounded-lg p-1 text-slate-600 dark:text-slate-300">
                <button
                  type="button"
                  onClick={() => setDeviceMode('desktop')}
                  className={`p-1.5 rounded-md transition-all ${
                    deviceMode === 'desktop'
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Desktop View (100%)"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceMode('tablet')}
                  className={`p-1.5 rounded-md transition-all ${
                    deviceMode === 'tablet'
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Tablet View (768px)"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceMode('mobile')}
                  className={`p-1.5 rounded-md transition-all ${
                    deviceMode === 'mobile'
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Mobile View (390px)"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            {isHtml && (
              <div className="flex items-center bg-slate-200 dark:bg-slate-800 rounded-lg p-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <button
                  type="button"
                  onClick={() => setViewMode('preview')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                    viewMode === 'preview'
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('code')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                    viewMode === 'code'
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Code</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyPath}
              className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Copy File Path"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>

            {isHtml && viewMode === 'preview' && (
              <button
                type="button"
                onClick={() => setIframeKey(Date.now())}
                className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                title="Reload Preview"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}

            <a
              href={resolvedPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Viewport */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center p-3 relative">
          {viewMode === 'preview' && isHtml ? (
            fileError ? (
              <div className="max-w-xl rounded-xl border border-rose-200 bg-white p-6 text-center text-sm text-rose-700 shadow-xl dark:border-rose-900 dark:bg-slate-900 dark:text-rose-300">
                <p className="font-bold">This task preview could not be loaded.</p>
                <p className="mt-2">{fileError}</p>
                <p className="mt-2 break-all font-mono text-xs">{task.path}</p>
              </div>
            ) : (
              <div className={`h-full bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 mx-auto ${deviceWidths[deviceMode]}`}>
                <iframe
                  key={iframeKey}
                  src={resolvedPath}
                  title={task.title}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            )
          ) : (
            <div className="w-full h-full bg-slate-900 text-slate-100 rounded-xl p-4 overflow-auto font-mono text-xs sm:text-sm border border-slate-800 shadow-inner">
              {isLoadingCode ? (
                <div className="flex items-center justify-center h-full text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin mr-2" />
                  <span>Loading source code...</span>
                </div>
              ) : (
                <pre className="whitespace-pre-wrap leading-relaxed select-text">
                  {fileContent}
                </pre>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Status Bar */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-500 dark:text-slate-400">
              Difficulty: <strong className="text-slate-900 dark:text-white">{task.difficulty}</strong>
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="font-semibold text-slate-500 dark:text-slate-400">
              Status:{' '}
              <strong className={completed ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}>
                {completed ? 'Completed' : 'Not Completed'}
              </strong>
            </span>
          </div>

          <button
            type="button"
            onClick={() => toggleTaskCompletion(task.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${
              completed
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {completed ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>✓ Completed</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-400" />
                <span>Mark as Completed</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
