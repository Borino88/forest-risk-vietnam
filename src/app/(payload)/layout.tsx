import config from '@/payload.config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { importMap } from '@/payload/importMap'

import './custom.scss'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap}>
    {children}
  </RootLayout>
)

export default Layout
