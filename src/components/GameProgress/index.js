import ThumbnailItem from '../ThumbnailItem'
import TabItem from '../TabItem'

import './index.css'

const GameProgress = props => {
  const {
    allImagesList,
    tabsList,
    currentImageId,
    onClickTab,
    onClickThumbnail,
    thumbnailImages,
    activeTabId,
  } = props

  const getImage = () =>
    allImagesList.find(image => image.id === currentImageId)

  const renderThumbnailsContainer = () => (
    <ul className="thumbnails-list-container">
      {thumbnailImages.map(eachThumbnail => (
        <ThumbnailItem
          key={eachThumbnail.id}
          thumbnailDetails={eachThumbnail}
          onClickThumbnail={onClickThumbnail}
        />
      ))}
    </ul>
  )

  const renderTabsContainer = () => (
    <ul className="tabs-list-container">
      {tabsList.map(eachTab => (
        <TabItem
          key={eachTab.id}
          active={eachTab.tabId === activeTabId}
          tabDetails={eachTab}
          onClickTab={onClickTab}
        />
      ))}
    </ul>
  )

  const {imageUrl} = getImage()

  return (
    <div className="game-page-container">
      <img className="match-image" src={imageUrl} alt="match" />
      {renderTabsContainer()}
      {renderThumbnailsContainer()}
    </div>
  )
}

export default GameProgress
