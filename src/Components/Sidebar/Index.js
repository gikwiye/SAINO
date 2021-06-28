import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <GlobalFonts />
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='Manifesto' onClick={toggle}>
                        Manifesto
                    </SidebarLink>
                    <SidebarLink to='Investissement' onClick={toggle}>
                        Investissement
                    </SidebarLink>
                    <SidebarLink to='Rising Funds' onClick={toggle}>
                        Rising Funds
                    </SidebarLink>
                    <SidebarLink to='Team' onClick={toggle}>
                        Team
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
