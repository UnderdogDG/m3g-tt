import styled from 'styled-components';

export function NavBar(){
    return(
        <Nav>

        </Nav>
    );
}

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: ${ ({ theme })=> theme.color.white };
    box-shadow: 0 1px 12px ${ ({ theme })=> theme.color.gray00 };
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;