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
    '/marketplace': { page: '/marketplace' },    
    '/about': { page: '/about' },
    '/allnfts': { page: '/allnfts' },
    '/blog': { page: '/blog' },
    '/blogdetails': { page: '/blogdetails' },
    '/collectiondetails': { page: '/collectiondetails' },
    '/collections': { page: '/collections' },
    '/contactus': { page: '/contactus' },
    '/ethereumnfts': { page: '/ethereumnfts' },
    '/explore': { page: '/explore' },
    '/faq': { page: '/faq' },
    '/fractionalnfts': { page: '/fractionalnfts' },
    '/fractionstep1': { page: '/fractionstep1' },
    '/fractionstep2': { page: '/fractionstep2' },
    '/newfeature': { page: '/newfeature' },
    '/nftdetails': { page: '/nftdetails' },
    '/privacypolicy': { page: '/privacypolicy' },
    '/profile': { page: '/profile' },
    '/solananfts': { page: '/solananfts' },
    '/terms': { page: '/terms' },
    '/topnftvaults': { page: '/topnftvaults' },
    '/vaultdetails': { page: '/vaultdetails' }
  }
}
}

module.exports = nextConfig
