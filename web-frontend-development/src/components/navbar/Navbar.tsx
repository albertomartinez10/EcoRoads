import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
`;

const Navbar = () => { 
    return(
        <Nav>
            <ul>
                <Link className='link' to="/">Chats</Link>
                <Link className='link' to="/Reports">Reports</Link>
            </ul>
        </Nav>
    )
}

export default Navbar;