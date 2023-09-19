import axios from "axios";
const searchImages = async (input) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: process.env.REACT_APP_UNSPLASH_API
        }, params: {
            query: input
        },
    });
    return response.data.results;
}

export default searchImages;