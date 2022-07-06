const webpack = require("webpack")
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
     "window.jQuery": "jquery",
   })
  );
return config;
  },

images: {
  loader: 'akamai',
    path: '',
  },
exportPathMap: async function (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId }
) {
  return {
    '/': { page: '/' },
    '/marketplace': { page: '/marketplace' }
  }
}
}

module.exports = nextConfig
