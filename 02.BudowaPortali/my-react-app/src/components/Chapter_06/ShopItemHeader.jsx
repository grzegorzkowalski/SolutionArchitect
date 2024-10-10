const ShopItemHeader = ({title, image}) => {
    return (
      <li>
        <image src={image} alt={title} />
        <p>{title}</p>
      </li>
)};

export default ShopItemHeader;