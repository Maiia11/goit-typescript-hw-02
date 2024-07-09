 import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

interface PropsImageGallery{
    gallery: [],
    onClick: ()=> void, 
}

const ImageGallery = ({ gallery, onClick }:PropsImageGallery) => {

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