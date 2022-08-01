import TopFive from '../components/TopFive';

const Home = () => {

    return(
        <div>
            <TopFive url={'https://api.jikan.moe/v4/top/anime'}/>
            {/* <TopFive url={'https://api.jikan.moe/v4/top/manga'}/> */}
        </div>
    )
}
export default Home;