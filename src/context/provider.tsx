import { forwardRef } from 'react'
import { AuthProvider } from '@saas-ui/auth'
import { LinkProps, SaasProvider } from '@saas-ui/react'
import { RouterProvider, createRouter, Link } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { routeTree } from '../routeTree.gen'

import { theme } from '#theme'
import { Box } from '@chakra-ui/react'
import { SidebarLayout } from '#layouts/sidebar-layout.js'

const queryClient = new QueryClient()

// Set up a Router instance
// const router = createRouter({
//   routeTree,
// })

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    // router: typeof router
  }
}

// This makes sure Saas UI components use our router
// const LinkComponent = forwardRef<HTMLAnchorElement, Pick<LinkProps, 'href'>>(
//   (props, ref) => {
//     const { href, ...rest } = props
//     return <Link ref={ref} to={href} {...rest} />
//   }
// )

export const Provider = () => {
  return (
      <Link name='"Sfs' to={"/logout"}>sdfasdf</Link>
  )
}
