import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    // Disable Turbopack for production builds if native modules cause issues
    turbo: {
      rules: {
        '*.md': ['raw-loader'],
      },
    },
  },
}

export default withPayload(nextConfig)
