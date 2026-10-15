import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, cpSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// These folders contain the existing task and project files published alongside the app.
const publishedFolders = [
  'HTML', 'CSS', 'JAVASCRIPT', 'SQL', 'REACT', 'TAILWINDCSS', 'BOOTSTRAP',
  'Article', 'MOTOVERSE ARTICLE', 'Learning Article',
];

function includeLinkedTaskFiles() {
  let outDir;
  return {
    name: 'include-linked-task-files',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const root = process.cwd();
      const output = resolve(root, outDir);
      for (const folder of publishedFolders) {
        const source = resolve(root, folder);
        if (existsSync(source)) {
          cpSync(source, resolve(output, folder), {
            recursive: true,
            dereference: true,
            filter: (path) => !/[\\/]node_modules([\\/]|$)/i.test(path) && !/[\\/]\.git([\\/]|$)/i.test(path),
          });
        }
      }

      // GitHub Pages serves 404.html for unknown paths. Copying the SPA entry
      // point lets BrowserRouter handle direct visits and refreshes on app routes.
      copyFileSync(resolve(output, 'index.html'), resolve(output, '404.html'));
    },
  };
}

export default defineConfig({
  plugins: [react(), includeLinkedTaskFiles()],
  base: '/newfrontend/',
  server: {
    port: 3000,
    host: true,
    fs: {
      allow: [process.cwd(), 'D:/index', 'D:/Frontend'],
    },
  },
});
