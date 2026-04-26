import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-ready Next.js config
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withPayload(nextConfig)
