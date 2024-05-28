/** @type {import('next').NextConfig} */

// const isGithubActions = process.env.GITHUB_ACTIONS || false
// let assetPrefix = ''
// let basePath = ''
// if (isGithubActions) {
//   // trim off `<owner>/`
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// };

const isGithubActions = process.env.GITHUB_ACTIONS || false
let output = undefined
if (isGithubActions) {
  output = 'export'
};

const nextConfig = {
    output: output,
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: true,
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'out',
    images: {
        loader: 'akamai',
        path: '',
    },
    // assetPrefix: assetPrefix,
    // basePath: basePath,
    // generateBuildId: async () => {
    //   // This could be anything, using the latest git hash
    //   return 'build'
    // },
    experimental: {
      forceSwcTransforms: true,
    }
};

module.exports = nextConfig
