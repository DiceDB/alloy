import path from 'node:path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('=======> ', __dirname, path.join(__dirname, 'out'))
export const packagerConfig = {
    asar: true,
extraResource: [
    path.join(__dirname, 'out') // Add the Next.js output directory
  ],
      }

export const makers = [
  {
    name: '@electron-forge/maker-squirrel',
    config: {
      name: 'dicedb-console',
    },
  },
  {
    name: '@electron-forge/maker-zip',
    platforms: ['darwin'],
  },
  {
    name: '@electron-forge/maker-deb',
    config: {},
  },
  {
    name: '@electron-forge/maker-rpm',
    config: {},
  },
];
