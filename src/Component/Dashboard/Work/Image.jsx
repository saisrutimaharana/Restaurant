import React, { useState } from "react";
import style from "./image.module.css";

const foodItems = [
    { name: "Pizza", imageUrl: "https://1tsp.in/wp-content/uploads/2021/07/image-1.jpg" },
    { name: "Burger", imageUrl: "https://recipes.timesofindia.com/thumb/83565509.cms?width=1200&height=900" },
    { name: "Noodles", imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/vegetable-noodles-500x500.jpg" },
    { name: "Sandwiches", imageUrl: "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2021-04/italian-sub-sandwich-recipe-1024x683.jpg" },
    { name: "Chowmein", imageUrl: "https://i.ytimg.com/vi/6-1-sEW_6ko/sddefault.jpg" },
    { name: "Steak", imageUrl: "https://www.washingtonpost.com/resizer/iywfEB3juK8yZhpw8ymbPCqp674=/arc-anglerfish-washpost-prod-washpost/public/53BGPNAB6YI63C7LFNHEQGYVAA.jpg" },
    { name: "Noodles", imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/vegetable-noodles-500x500.jpg" },
    { name: "Noodles", imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/vegetable-noodles-500x500.jpg" },
    { name: "Pizza", imageUrl: "https://1tsp.in/wp-content/uploads/2021/07/image-1.jpg" },
    { name: "Burger", imageUrl: "https://recipes.timesofindia.com/thumb/83565509.cms?width=1200&height=900" },
    { name: "Noodles", imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/vegetable-noodles-500x500.jpg" },
    { name: "Sandwiches", imageUrl: "https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2021-04/italian-sub-sandwich-recipe-1024x683.jpg" },
    { name: "Chowmein", imageUrl: "https://i.ytimg.com/vi/6-1-sEW_6ko/sddefault.jpg" },
    { name: "Steak", imageUrl: "https://www.washingtonpost.com/resizer/iywfEB3juK8yZhpw8ymbPCqp674=/arc-anglerfish-washpost-prod-washpost/public/53BGPNAB6YI63C7LFNHEQGYVAA.jpg" },
    { name: "Noodles", imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/vegetable-noodles-500x500.jpg" },
    { name: "Noodles", imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/vegetable-noodles-500x500.jpg" },
];

function Image() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 6;
    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    };

    const prevItem = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + foodItems.length) % foodItems.length
          );
    };

    return (
        <div className={style.carouselcontainer}>

            <div className={style.viewall}>
                <h2>Search by Food</h2>
                <h4>VIEW ALL</h4><button className={style.arrow} left onClick={prevItem}>←</button>
                <button className={style.arrow} right onClick={nextItem}>→</button>
            </div>
            <div className={style.carousel}>
                <div className={style.carouselitems}>
                    {foodItems.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
                        <div className={style.fooditem} key={index}>
                            <img src={item.imageUrl} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default Image;