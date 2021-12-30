import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarMenu,
    SidebarLink,
    SidebarRoute, } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='Project Experience' onClick={toggle}>
                        Project Experience
                    </SidebarLink>
                    <SidebarLink to='Discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='Services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='sign up' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    );
};

export default Sidebar;
