import { Nav, NavItem, NavLink,Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [animeDropdownOpen, setAnimeDropdownOpen]=useState(false);
    const [mangaDropdownOpen, setMangaDropdownOpen]=useState(false)

    const toggleAnime = () => setAnimeDropdownOpen(!animeDropdownOpen);
    const toggleManga = () => setMangaDropdownOpen(!mangaDropdownOpen)
    return(
        <Nav pills className="nav">
            <NavItem>
                <NavLink>Top Anime Archive</NavLink>
            </NavItem>
            <Dropdown  nav isOpen={animeDropdownOpen} toggle={toggleAnime}>
                <DropdownToggle nav caret>
                    Anime
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem tag={Link} to='/top-anime'>Top 25 Anime</DropdownItem>
                    <DropdownItem tag={Link} to='/search-top-anime' >Search Top Anime</DropdownItem>
                    <DropdownItem >Seasonal Anime</DropdownItem>
                    <DropdownItem >Reviews</DropdownItem>
                    <DropdownItem >Reccomendations</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown nav isOpen={mangaDropdownOpen} toggle={toggleManga}>
                <DropdownToggle nav caret>
                    Manga
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem tag={Link} to='/top-manga'>Top 25 Manga</DropdownItem>
                    <DropdownItem >Search Manga</DropdownItem>
                    <DropdownItem >Reviews</DropdownItem>
                    <DropdownItem >Reccomendations</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                <NavLink>My List</NavLink>
            </NavItem>
        </Nav>
    );
}
export default Header;