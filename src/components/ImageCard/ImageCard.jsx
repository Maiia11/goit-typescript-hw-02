import css from './ImageCard.module.css'

const ImageCard = ({ url, alt, onClick, regular, likes, name }) => {
  return (
    <div >
      <img className={css.img} src={url} alt={alt} onClick={() => onClick(regular)} />
      <div className={css.listText}>
        <p>Likes: {likes}</p>
        <p>Author: {name} </p>
  
      </div>
</div>
  )
}

export default ImageCard