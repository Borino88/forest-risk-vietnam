import { HANDLE_REST, HANDLE_GRAPHQL } from '@payloadcms/next/routes'
import config from '@/payload.config'

export const GET = HANDLE_REST(config)
export const POST = HANDLE_REST(config)
export const PATCH = HANDLE_REST(config)
export const DELETE = HANDLE_REST(config)
export const OPTIONS = HANDLE_REST(config)
