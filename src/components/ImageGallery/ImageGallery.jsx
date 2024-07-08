 import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({ gallery, onClick }) => {

    return (
        <ul className={css.list}>
            {gallery.map(({ id, urls: { small, regular }, alt_description, likes, user: { name } }) => {
                
                return (
                <li key={id}>
                        <ImageCard url={small} alt={alt_description} regular={regular} onClick={onClick} likes={likes} location={location} name={name} />
                        
                    </li>
                   
                )
            })}
            
        </ul>
         

)}
	

export default ImageGallery