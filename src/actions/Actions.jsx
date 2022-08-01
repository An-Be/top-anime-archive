export const getAllAnime = async () => {
    const res = await fetch('https://api.jikan.moe/v4/top/anime');
    const data = await res.json();
    return data.data;
}

export const getAllManga = async () => {
    const res = await fetch('https://api.jikan.moe/v4/top/manga');
    const data = await res.json();
    return data.data;
}