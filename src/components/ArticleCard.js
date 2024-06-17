const ArticleCard = ({ info }) => {
  const { author, description, text, title, urlToImage, image , webTitle } = info;
  const newsTitle = title || webTitle;
  const imageUrl = urlToImage || image;
  const newsDescription = description || text
  return (
    <div className={`p-2 m-2 shadow-lg w-96 sm:w-96 md:w-80 lg:w-80 xl:w-96`}>
      {imageUrl && <img className='rounded-lg w-full' alt='image-banner' src={imageUrl} />}
      <ul>
        <li className="font-bold py-2">{newsTitle}</li>
        <li>{newsDescription && newsDescription.substring(0, 300) + '...'}</li>
        <li className="font-bold">{author}</li>
      </ul>
    </div>
  )
}

export default ArticleCard;