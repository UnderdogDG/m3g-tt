import styled from 'styled-components';

import { Flex, ResposiveContainer, SectionContainer } from '../containers';
import { nav } from '../utils/data/nav';

export function NavBar(){
    return(
        <Nav>
            <NavContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <NavMenuContainer>
                    <NavMenu>
                        {
                            nav.links.map((e)=>(
                                <NavItem key={ e.label }>
                                    <NavLink href={ e.link }>
                                        { e.label }
                                    </NavLink>
                                </NavItem>
                            ))
                        }

                    </NavMenu>
                </NavMenuContainer>
            </NavContainer>

        </Nav>
    );
}

const Nav = styled.nav`
    width: 100%;
    min-height: 50px;
    background-color: ${ ({ theme })=> theme.color.white };
    box-shadow: 0 1px 12px ${ ({ theme })=> theme.color.gray00 };
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    top: 0;
    left: 0;
    z-index: 999;
`;

const NavContainer = styled(SectionContainer)`
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    min-height: auto;
    margin: 0 ;
    padding: 0;
`;

const LogoContainer = styled(Flex)`
    padding: 5px 10px;
`;

const Logo = styled(ResposiveContainer)`
    width: 40px;
    height: 40px;
    padding-bottom: 0;
    background-color: ${ ({ theme })=>theme.color.blue46 };

    &::after{
        content: "";
        display: block;
        width: 30px;
        height: 30px;
        border: 6px solid ${ ({ theme })=>theme.color.white };
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
    }
`;

const NavMenuContainer = styled(Flex)`
    justify-content: flex-end;
    flex-grow: 1;
`;

const NavMenu = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    margin: 0;
`;

const NavItem = styled.li`
    min-width: 8%;
    list-style: none;
`;

const NavLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${ ({ theme })=>theme.color.blue46 };
    ${ ({ theme })=>theme.type.main }
    font-weight: 600;
    color: ${ ({ theme })=>theme.color.blue46 };
    text-align: center;
    padding: 5px 10px;
    margin: 5px 10px;
    text-decoration: none;
`;

