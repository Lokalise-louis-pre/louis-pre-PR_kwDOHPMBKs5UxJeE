try{
var g=__STORYBOOKADDONS__,{addons:i,types:b,mockChannel:y}=__STORYBOOKADDONS__;var j=__STORYBOOKTHEMING__,{CacheProvider:x,ClassNames:_,Global:O,ThemeProvider:S,background:w,color:D,convert:T,create:o,createCache:E,createGlobal:C,createReset:N,css:z,darken:A,ensure:L,ignoreSsrWarning:B,isPropValid:I,jsx:P,keyframes:R,lighten:Y,styled:G,themes:H,typography:K,useTheme:W,withTheme:M}=__STORYBOOKTHEMING__;var r={name:"@lokalise/louis",version:"17.13.0",engines:{npm:">=8",node:">=16"},type:"module",scripts:{"ts-compile":"tsc -p tsconfig.app.json --noEmit false --emitDeclarationOnly",build:"rimraf dist && rollup -c --failAfterWarnings","bundle:composition":"ANALYZE_BUNDLE_COMPOSITION=1 npm run build","bundle:size":"bundlesize","storybook:dev":"storybook dev -p 6006","storybook:build":"storybook build","test:ts":"tsc -p tsconfig.test.json",test:"npm run test:ts && jest","test:visual:ci":"jest --runInBand --config ./jest.config.visual.cjs","test:visual":"docker run -it --rm --ipc=host -v $PWD:/opt -w /opt -e HEADLESS='true' mcr.microsoft.com/playwright:v1.35.1 npm run test:visual:ci","test:visual:update":"docker run -it --rm --ipc=host -v $PWD:/opt -w /opt -e HEADLESS='true' mcr.microsoft.com/playwright:v1.35.1 npm run test:visual:ci -- --updateSnapshot","test:localpackage":'nodemon --exec "npm run build && yalc publish --push --no-scripts" --watch src --ext tsx,ts',"lint:ts":"tsc -p tsconfig.app.json && tsc -p tsconfig.test.json","lint:prettier":"npm run lint-file:prettier -- **/*.md src package.json .eslintrc.json","lint:eslint":"npm run lint-file:eslint -- ./src",lint:"npm run lint:ts && npm run lint:prettier && npm run lint:eslint","lint-file:prettier":"prettier --check","lint-file:eslint":"eslint --report-unused-disable-directives --max-warnings 0","format:prettier":"npm run lint:prettier -- --write","format:eslint":"npm run lint:eslint -- --fix",format:"npm run format:prettier && npm run format:eslint",prepare:"husky install"},main:"dist/index.cjs",module:"dist/index.js",types:"dist/index.d.ts",exports:{".":{import:"./dist/index.js",require:"./dist/index.cjs"},"./assets/*":"./dist/assets/*"},sideEffects:["*.css"],files:["dist/**"],repository:{type:"git",url:"git+https://github.com/lokalise/louis.git"},author:"Lokalise",bugs:{url:"https://github.com/lokalise/louis/issues"},homepage:"https://lokalise.github.io/louis",publishConfig:{access:"public"},devDependencies:{"@babel/core":"^7.22.5","@babel/preset-env":"^7.22.5","@babel/preset-react":"^7.22.5","@babel/preset-typescript":"^7.22.5","@commitlint/cli":"^17.6.6","@commitlint/config-conventional":"^17.6.6","@floating-ui/react":"^0.24.5","@lokalise/eslint-plugin":"^1.5.0","@lokalise/styled":"^2.1.0","@rollup/plugin-babel":"^6.0.3","@rollup/plugin-terser":"^0.4.3","@rollup/plugin-typescript":"^11.1.2","@semantic-release/changelog":"^6.0.3","@semantic-release/commit-analyzer":"^10.0.1","@semantic-release/git":"^10.0.1","@semantic-release/github":"^9.0.3","@semantic-release/npm":"^10.0.4","@semantic-release/release-notes-generator":"^11.0.3","@storybook/addon-actions":"^7.0.24","@storybook/addon-docs":"^7.0.24","@storybook/addon-essentials":"^7.0.24","@storybook/addon-links":"^7.0.24","@storybook/addon-postcss":"^2.0.0","@storybook/addon-styling":"^1.3.2","@storybook/addons":"^7.0.24","@storybook/blocks":"^7.0.26","@storybook/client-api":"^7.0.24","@storybook/core-events":"^7.0.24","@storybook/react":"^7.0.24","@storybook/react-webpack5":"^7.0.24","@storybook/testing-library":"^0.2.0","@storybook/theming":"^7.0.24","@testing-library/jest-dom":"^5.16.5","@testing-library/react":"^14.0.0","@testing-library/user-event":"^14.4.3","@types/debounce":"^1.2.1","@types/jest":"^29.5.2","@types/jest-image-snapshot":"^6.1.0","@types/md5":"^2.3.2","@typescript-eslint/eslint-plugin":"^5.60.1","@typescript-eslint/parser":"^5.60.0","babel-plugin-module-resolver":"^5.0.0","babel-plugin-styled-components":"^2.1.4",bundlesize:"^0.18.1","date-fns":"^2.30.0",debounce:"^1.2.1","dialog-polyfill":"^0.5.6",dotenv:"^16.3.1",envalid:"^7.3.1",eslint:"^8.43.0","eslint-config-airbnb":"^19.0.4","eslint-config-prettier":"^8.8.0","eslint-import-resolver-typescript":"^3.5.5","eslint-module-utils":"^2.8.0","eslint-plugin-boundaries":"^3.1.1","eslint-plugin-import":"^2.26.0","eslint-plugin-jest":"^27.2.2","eslint-plugin-jest-formatting":"^3.1.0","eslint-plugin-jsx-a11y":"^6.7.1","eslint-plugin-react":"^7.32.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-sonarjs":"^0.19.0","eslint-plugin-storybook":"^0.6.12","eslint-plugin-testing-library":"^5.11.0","expect-type":"^0.16.0","gh-pages":"^5.0.0",husky:"^8.0.3",jest:"^29.5.0","jest-environment-jsdom":"^29.5.0","jest-fail-on-console":"^3.1.1","jest-image-snapshot":"^6.1.0",md5:"^2.3.0",nodemon:"^2.0.22",playwright:"^1.35.1",prettier:"^2.8.8",react:"^18.2.0","react-day-picker":"^8.8.0","react-dom":"^18.2.0","react-focus-lock":"^2.9.4","react-remove-scroll":"^2.5.6","react-select":"^5.7.3","react-select-event":"^5.5.1","react-toastify":"^9.1.3","react-uid":"^2.3.3","remark-gfm":"^3.0.1","resize-observer-polyfill":"^1.5.1",rimraf:"^5.0.1",rollup:"^3.25.2","rollup-plugin-copy-assets":"2.0.3","rollup-plugin-visualizer":"^5.9.2","semantic-release":"^21.0.5","semantic-release-slack-bot":"^4.0.2",storybook:"^7.0.24","ts-toolbelt":"^9.6.0",typescript:"5.1.6","use-local-slice":"^1.2.1"},peerDependencies:{"@lokalise/token-dictionary":"^2.4.0","@floating-ui/react":"^0.24.5","@lokalise/styled":"^2.1.0","date-fns":"^2.30.0",debounce:"^1.2.1","dialog-polyfill":"^0.5.6",md5:"^2.3.0",react:"17.x.x || 18.x.x","react-day-picker":"^8.8.0","react-dom":"17.x.x || 18.x.x","react-focus-lock":"^2.9.4","react-remove-scroll":"^2.5.6","react-dropzone":"^14.2.3","react-select":"^5.7.3","react-toastify":"^9.1.3","react-uid":"^2.3.3","use-local-slice":"^1.2.1"},overrides:{"@mdx-js/react":{react:"^18.2.0","react-dom":"^18.2.0"}}};var n=o({base:"light",barTextColor:"black",barSelectedColor:"black",brandTitle:`Louis v${r.version}`,brandImage:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Lokalise_logo_2021.svg"});i.setConfig({theme:n});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
