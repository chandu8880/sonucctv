
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 710, hash: '4bfc695ecff8727c6ee61c93b3556932069270652be4e61f3a4f78f3d3aaac30', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: 'fcf2646d5c59d6cc832d2caa12e35e9ed1703b1d31ac17839fbec211a386e7a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8077, hash: 'c7bd1e9f3e039b83007ebfbbf6287e2bf43c590da6e7c691f3914c522ffd0067', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VIWSUDQX.css': {size: 147, hash: 'mw4o1DmPH8Q', text: () => import('./assets-chunks/styles-VIWSUDQX_css.mjs').then(m => m.default)}
  },
};
