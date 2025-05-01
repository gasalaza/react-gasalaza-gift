export const getGifts = async(category) => {
    const apiKey = '7Ylnfu4dMRL5L998YVDxhyiQZODuf1Jr'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=3&offset=0&rating=g&lang=en`;
    const response = await fetch(url)
      .then(res => res.json())
      .then(data => {
        const gifs = data.data.map(gif => ({
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized_medium.url
        }));
        return gifs;
      });
    return response;
  }