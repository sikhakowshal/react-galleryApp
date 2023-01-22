import './index.css'

const ThumbnailItem = props => {
  const {imageData, updateActiveId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageData

  const onClickThumbnailItem = () => {
    updateActiveId(id)
  }

  const activeThumbnail = isActive ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-image-container" onClick={onClickThumbnailItem}>
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${activeThumbnail}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
