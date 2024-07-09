import axios from "axios";

const acceptKey = "zDei0CTQ82bIpGgBAWl-KIKshW8lXqg3k_pY_IM5bRY"

axios.defaults.baseURL = `https://api.unsplash.com`

interface Image {
    id: number,
    urls: {
        small: string,
        regular: string,
    },
    alt_description: string,
    likes: number,
    user: {
        name: string
    }
}

interface Response{
  total: number;
  total_pages: number;
  results: Image[];
}

export const getImageGallery = async (searchQuery:string, page:number): Promise<Response> => {
    const { data } = await axios.get<Response>(`/search/photos?client_id=${acceptKey}`, {
        params: {
            query: searchQuery,
            per_page: 9,
            page
        }
    })
    return data
}