// docusaurus.config.js
module.exports = {
  title: 'APX-GIS Manuals',
  url: 'https://app.apx-gis.net',
  baseUrl: '/user-manual/',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,   // disable docs plugin
        blog: false,   // disable blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};
