import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '@/payload/importMap'
import config from '@/payload.config'

type Args = {
  params: Promise<{
    payload: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config, params, searchParams, importMap })

export default Page
