import path from 'path';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';

const isProduction = process.env.NODE_ENV === 'production';
const outputDir = isProduction ? 'build/dist/monaco-editor' : 'build/dev/monaco-editor';

const inputs = {
    'monaco-editor-small-python': './src/monaco-editor-bundling/monaco-editor-small-python.js',
    'editor.worker': 'node_modules/monaco-editor/esm/vs/editor/editor.worker.js'
};

export default Object.keys(inputs).map(name => ({
    input: inputs[name],
    output: {
        dir: path.resolve(__dirname, outputDir),
        format: 'esm',
        sourcemap: true,
        entryFileNames: '[name].bundle.js',
        chunkFileNames: '[name].bundle.[hash].js',
        manualChunks(id) {
            if (id.includes('node_modules')) {
                const libraryName = id.split('node_modules/')[1].split('/')[0];
                return `vendor.${libraryName}`;
            }
        }
    },
    plugins: [
        nodeResolve({
            browser: true,
            preferBuiltins: false
        }),
        css({ output: `${name}.css` }),
        url({
            include: ['**/*.ttf'],
            limit: Infinity
        }),
        isProduction && terser()
    ]
}));
