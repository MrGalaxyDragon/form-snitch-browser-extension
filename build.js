import { build } from 'esbuild';
import { config } from 'dotenv';

const env = config().parsed;

const define = {};
for (const k in env) {
    define[`process.env.${k}`] = JSON.stringify(env[k]);
}

build({
    outbase: 'src',
    entryPoints: ['./**/index.ts'],
    outdir: 'dist',
    entryNames: '[dir]/[name]',
    bundle: true,
    platform: 'browser',
    sourcemap: false,
    minify: true,
    define,
}).catch(() => process.exit(1));