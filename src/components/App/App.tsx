
import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './App.css'
import {getImageGallery} from '../image-gallery-api'
 import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

const modalParams = {
  isOpen: false,
  url: ''
};

interface ModalParams {
  isOpen: boolean,
  url: string
}

interface Gallery {
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

function App() {
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<ModalParams>(modalParams);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);

  useEffect(() => {
    async function fetchImageGallery() {
      try {
        setError(false);
        setLoading(true);
        const data = await getImageGallery(query, page);
        setGallery((prev) => [...prev, ...data.results]);
        setShowLoadMore (data.total_pages && data.total_pages !== page)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }
  query && fetchImageGallery()
  }, [query, page])

  const handleSubmit = async (searchQuery:string) => {
    setQuery(searchQuery)
    setGallery([])
    setPage(1)

  }

  const handleLoadMore = async () => {
    setPage(page + 1)
  }

  const handleImageClick = (url) => {
    setIsOpen({ isOpen: true, url: url })
    
  }

  const handleCloseModal = ()  =>{
    setIsOpen(modalParams);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {gallery.length > 0 && <ImageGallery gallery={gallery} onClick={handleImageClick} />}
      {loading && <Loader />}
      {gallery.length > 0 && showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalIsOpen && <ImageModal url={modalIsOpen.url}
        isOpen={modalIsOpen.isOpen}
        onClose={handleCloseModal}
        onRequestClose={handleCloseModal} />}

    </>
  )

  
  
}



export default App
