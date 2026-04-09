


import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from "node:path";
import postcssNesting from 'postcss-nesting';
import ejsTemplatePlugin from './src/rollupPlugin';
import seoPlugin from './src/seoPlugin';


/**
 * OWLINE DIGITAL SOLUTIONS
 * Developed by: Anas
 */

const printSignature = () => {

    const PURPLE = '\x1b[95m';
    const CYAN = '\x1b[96m';
    const BOLD = '\x1b[1m';
    const RESET = '\x1b[0m';

    const logo = `
${PURPLE}${BOLD}       ,_,   
      (o,o)    ____  _      _ _             
       /)  )  / __ \\| |    (_) |            
      " "    | |  | | |     _| |▄▄▄  ▄▄▄ 
             | |  | | |    | |  _  \\/ _ \\
    [SYSTEM] | |__| | |____| | | | |  __/
    [READY]   \\____/|______|_|_| |_|\\___| ${RESET}
    `;

    console.log(logo);
    console.log(`${CYAN}---${RESET} ${BOLD}OWLINE DIGITAL SOLUTIONS${RESET} ${CYAN}---${RESET}`);
    console.log(`${PURPLE}>>${RESET} Engine: ${BOLD}Node.js${RESET} | Developer: ${BOLD}Anas${RESET} | Status: ${CYAN}Active${RESET}\n`);
};


printSignature();


export default defineConfig(({command, mode}) => ({
    plugins: [react({
      jsxRuntime: 'classic',
    }), ejsTemplatePlugin({
        compileDebug: mode === 'development'
    }), seoPlugin()],

    esbuild: {
        jsxInject: `import React from 'react'`
    },
    resolve: (command === 'serve' && mode === 'development') ? {
        // Make library auto-reload only on yarn dev
        alias: [
            // .* is to not double import css files
            {find: /^components-sdk.*$/, replacement: resolve(__dirname, '../components-sdk/src')},
        ],
    } : undefined,
    css: {
        postcss: {
            plugins: [
                postcssNesting
            ],
        },
    },
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
    build: {
    }
}));
