import axios from "axios";

const acceptKey = "zDei0CTQ82bIpGgBAWl-KIKshW8lXqg3k_pY_IM5bRY"

axios.defaults.baseURL = `https://api.unsplash.com`

export const getImageGallery = async (searchQuery, page) => {
    const { data } = await axios.get(`/search/photos?client_id=${acceptKey}`, {
        params: {
            query: searchQuery,
            per_page: 9,
            page
        }
    })
    return data
}