import { Nav, NavItem, NavLink,Dropdown, NavbarBrand, DropdownItem, DropdownToggle, DropdownMenu, Button } from "reactstrap";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const Header = () => {
    const navigate = useNavigate();
    const { isAuth, setIsAuth, resetUser } = useContext(UserContext);

    const [animeDropdownOpen, setAnimeDropdownOpen]=useState(false);
    const [mangaDropdownOpen, setMangaDropdownOpen]=useState(false);

    const signOutUser = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            resetUser();
            navigate("/login");
        })
    }

    const toggleAnime = () => setAnimeDropdownOpen(!animeDropdownOpen);
    const toggleManga = () => setMangaDropdownOpen(!mangaDropdownOpen)
    return(
        <Nav style={{padding: '1rem', borderBottom: '1px solid #E7E7E7'}}  className="nav">
            <NavItem>
                <NavbarBrand className="navBrand" tag={Link} to='/'><img style={{width: '50px'}} src={require('../logo.png')} alt='logo' /></NavbarBrand>
            </NavItem>
            <Dropdown  nav isOpen={animeDropdownOpen} toggle={toggleAnime}>
                <DropdownToggle style={{color: '#457b9d'}} nav caret>
                    Anime
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem tag={Link} to='/top-anime'>Trending Anime</DropdownItem>
                    <DropdownItem tag={Link} to='/season-anime'>Seasonal Anime</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown nav isOpen={mangaDropdownOpen} toggle={toggleManga}>
                <DropdownToggle style={{color: '#457b9d'}} nav caret>
                    Manga
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem tag={Link} to='/top-manga'>Trending Manga</DropdownItem>
                </DropdownMenu>
            </Dropdown>
                {isAuth && 
                    <>
                    <NavItem> 
                    <NavLink tag={Link} to='/list' style={{color: '#457b9d'}}>My List</NavLink> 
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to='/profile' style={{color: '#457b9d'}}>My Profile</NavLink>
                    </NavItem>
                    </>
                }
            {!isAuth ? <Button tag={Link} to='/login'>Log In</Button>
            :
            <Button onClick={signOutUser}>Sign out</Button>
            }
        </Nav>
    );
}
export default Header;