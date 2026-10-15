import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const projects = [
  ['REACT/Day2/my-react-project', 'REACT/Day2/dist'],
  ['REACT/Day3/myproject', 'REACT/Day3/myproject/dist'],
  ['REACT/Day3/myproject2', 'REACT/Day3/myproject2/dist'],
  ['REACT/Day4/myapp', 'REACT/Day4/myapp/dist'],
  ['REACT/Day5/day5project', 'REACT/Day5/day5project/dist'],
  ['REACT/Day6/day6project', 'REACT/Day6/day6project/dist'],
  ['REACT/Day7/day7project', 'REACT/Day7/day7project/dist'],
  ['REACT/Day8/day8project', 'REACT/Day8/day8project/dist'],
  ['REACT/Day9/day9project', 'REACT/Day9/day9project/dist'],
  ['REACT/Day10/day10project', 'REACT/Day10/day10project/dist'],
];

for (const [project, output] of projects) {
  const npmArgs = [
    '--prefix', project, 'run', 'build', '--',
    `--base=/newfrontend/${output}/`,
  ];
  const npmCli = process.env.npm_execpath;
  const command = npmCli ? process.execPath : (process.platform === 'win32' ? 'npm.cmd' : 'npm');
  const args = npmCli ? [npmCli, ...npmArgs] : npmArgs;
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    shell: !npmCli && process.platform === 'win32',
  });

  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
