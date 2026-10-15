import React from 'react';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  Code2,
  Compass,
  CheckCircle2
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { PROJECTS } from '../data/projectsData';

export default function ProjectsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Breadcrumb Trail */}
      <Breadcrumb
        items={[
          { label: 'Projects & Articles', to: '/projects' }
        ]}
        backTo="/"
        backLabel="Back to Home"
      />

      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-800/40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Standalone Web Applications</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
            Articles &amp; Full Projects
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            Multi-page production capstones and standalone frontend web projects built to synthesize HTML, CSS layout systems, responsive design, and dynamic JavaScript.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            {/* Card Header */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {proj.shortName}
                </span>

                <span className="text-xs font-semibold text-slate-400">
                  {proj.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                {proj.title}
              </h2>

              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                {proj.subtitle}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {proj.description}
              </p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pages Preview if multi-page */}
              {proj.pages && (
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-bold text-slate-500 dark:text-slate-400 block mb-1">
                    Multi-Page Modules:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {proj.pages.map((p, idx) => (
                      <span key={idx} className="font-mono text-[11px] text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Launch Button Action */}
            <div className="p-6 pt-0">
              <a
                href={`/${proj.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600 transition-all shadow-sm group-hover:shadow"
              >
                <span>Launch {proj.title}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
