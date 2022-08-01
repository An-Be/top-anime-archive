// import Top5Anime from "../components/Top5Anime";
// import Top5Manga from "../components/Top5Manga";
import TopFive from "../components/TopFive";

const Home = () => {

    return(
        <div>
            <TopFive type={'anime'}/>
            <TopFive type={'manga'}/>
        </div>
    )
}
export default Home;