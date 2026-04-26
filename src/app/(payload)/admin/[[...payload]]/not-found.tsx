import { NotFoundPage } from '@payloadcms/next/views'
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

const NotFound = ({ params, searchParams }: Args) =>
  NotFoundPage({ config, params, searchParams, importMap })

export default NotFound
