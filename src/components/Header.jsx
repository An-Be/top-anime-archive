import { Nav, NavItem, NavLink,Dropdown, NavbarBrand, DropdownItem, DropdownToggle, DropdownMenu, Button } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [animeDropdownOpen, setAnimeDropdownOpen]=useState(false);
    const [mangaDropdownOpen, setMangaDropdownOpen]=useState(false)

    const toggleAnime = () => setAnimeDropdownOpen(!animeDropdownOpen);
    const toggleManga = () => setMangaDropdownOpen(!mangaDropdownOpen)
    return(
        <Nav style={{padding: '1rem', borderBottom: '1px solid grey'}}  className="nav">
            <NavItem>
                <NavbarBrand className="navBrand" tag={Link} to='/'><img style={{width: '50px'}} src={require('../logo.png')} /></NavbarBrand>
            </NavItem>
            <Dropdown  nav isOpen={animeDropdownOpen} toggle={toggleAnime}>
                <DropdownToggle style={{color: 'white'}} nav caret>
                    Anime
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem tag={Link} to='/top-anime'>Top 25 Anime</DropdownItem>
                    <DropdownItem tag={Link} to='/search-top-anime' >Search Top Anime</DropdownItem>
                    <DropdownItem >Seasonal Anime</DropdownItem>
                    <DropdownItem >Reviews</DropdownItem>
                    <DropdownItem tag={Link} to='/anime-reccomendations'>Reccomendations</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown nav isOpen={mangaDropdownOpen} toggle={toggleManga}>
                <DropdownToggle style={{color: 'white'}} nav caret>
                    Manga
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem tag={Link} to='/top-manga'>Top 25 Manga</DropdownItem>
                    <DropdownItem >Search Manga</DropdownItem>
                    <DropdownItem >Reviews</DropdownItem>
                    <DropdownItem tag={Link} to='/manga-reccomendations'>Reccomendations</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                <NavLink style={{color: 'white'}}>My List</NavLink>
            </NavItem>
            <Button>Sign Up</Button>

        </Nav>
    );
}
export default Header;