// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickTheImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnailImage = () => {
    onClickTheImage(id)
  }
  const activeTabBtnClassName = isActive
    ? 'active-tab-btn thumbnail'
    : 'thumbnail'

  return (
    <>
      <li className="thumbnail-image-list-item">
        <button
          type="button"
          onClick={onClickThumbnailImage}
          className={`button ${activeTabBtnClassName}`}
        >
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-image"
          />
        </button>
      </li>
    </>
  )
}
export default ThumbnailItem
