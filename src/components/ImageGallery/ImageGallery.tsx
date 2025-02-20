 import { Image } from "../image-gallery-api"
import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

interface PropsImageGallery{
    gallery: Image[],
    onClick: (url:string)=> void, 
}

const ImageGallery: React.FC<PropsImageGallery> = ({ gallery, onClick }) => {

    return (
        <ul className={css.list}>
            {gallery.map(({ id, urls: { small, regular }, alt_description, likes, user: { name } }) => {
                
                return (
                <li key={id}>
                        <ImageCard url={small} alt={alt_description} regular={regular} onClick={onClick} likes={likes}  name={name} />
                        
                    </li>
                   
                )
            })}
            
        </ul>
         

)}
	

export default ImageGallery