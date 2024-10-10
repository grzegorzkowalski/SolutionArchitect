import hardware from "./data/hardware.js";
import ShopItemHeader from "./ShopItemHeader.jsx";

const ShopList = () => {
    return (
        <ul>
            { hardware.map((el, index) => {
                return (
                    <ShopItemHeader 
                        key={index} 
                        title={el.title} 
                        image={el.image} 
                    />
                )} 
            )}
        </ul>
    );
};

export default ShopList;