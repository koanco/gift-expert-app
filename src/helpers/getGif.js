
const API_KEY ='F0mSXvx3U58BDZ78burt2BB26vDO2ndG';
export const getGif = async ( category ) => { 
    
const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${API_KEY}&limit=20`;
    const resp = await fetch(url);
    const { data=[] } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}