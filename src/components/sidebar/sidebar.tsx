import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {
  NavGroup,
  NavItem,
  PersonaAvatar,
  Sidebar,
  SidebarSection,
} from '@saas-ui/react'
import { Link } from '@tanstack/react-router'

export const AppSidebar = () => {

  return (
    <Box>
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={
              <PersonaAvatar name={"user?.name ?? user?.email"} size="xs" />
            }
          >
            {"user?.name ?? user?.email"}
          </MenuButton>
              
        </Menu>
        <Link name='"Sfs' to={"/logout"} />
        <NavGroup>
          <NavItem href="/">Home</NavItem>
        </NavGroup>
    </Box>
  )
}
