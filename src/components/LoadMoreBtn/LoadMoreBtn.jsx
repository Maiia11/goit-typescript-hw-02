import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({onClick}) => {
  return (
      <div>
          <button className={css.btn} type="submit" onClick={onClick}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn