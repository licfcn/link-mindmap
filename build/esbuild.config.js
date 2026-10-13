const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['../src.js'],
  bundle: true,
  external: ['obsidian'],
  format: 'cjs',
  target: 'es2020',
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: false,
  keepNames: false,
  outfile: '../main.js',
}).then(() => {
  console.log('Build complete: main.js');
}).catch((err) => {
  console.error(err);
  process.exit(1);
});