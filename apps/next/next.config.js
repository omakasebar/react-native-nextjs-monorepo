/** @type {import('next').NextConfig} */
const { withExpo } = require('@expo/next-adapter')

const nextConfig = withExpo({
  reactStrictMode: true,
  transpilePackages: [
    'solito',
    'dripsy',
    '@dripsy/core',
    'moti',
    '@motify/core',
    '@motify/components',
    'app',
    'react-native',
    'react-native-web',
    'expo',
  ],
  experimental: {
    forceSwcTransforms: true,
  },
})

module.exports = nextConfig
