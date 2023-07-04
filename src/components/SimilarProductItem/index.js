const SimilarProductItem = props => {
  const {productDetails} = props
  const {brand, title, imageUrl, rating, price} = productDetails

  return (
    <li className="similar-product-item">
      <img src={imageUrl} alt={`similar product ${title}`} />
      <p>{title}</p>
      <p>by {brand}</p>
      <div className="rating-container">
        <p>Rs {price}/</p>
        <div className="rating-container">
          <p>{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
