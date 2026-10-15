import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// The exercise folders are existing links into D:/Frontend. Vite can serve
// those linked files in development, while this plugin includes them in the
// production build so task URLs keep working after deployment.
const taskFolders = ['HTML', 'CSS', 'JAVASCRIPT', 'SQL', 'REACT', 'TAILWINDCSS', 'BOOTSTRAP'];

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
      for (const folder of taskFolders) {
        const source = resolve(root, folder);
        if (existsSync(source)) {
          cpSync(source, resolve(output, folder), {
            recursive: true,
            dereference: true,
            filter: (path) => !/[\\/]node_modules([\\/]|$)/i.test(path) && !/[\\/]\.git([\\/]|$)/i.test(path),
          });
        }
      }
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
      allow: ['D:/index', 'D:/Frontend'],
    },
  },
});
