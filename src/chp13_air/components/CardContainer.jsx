import React from "react";
import Card from "./Card";
import 아파트 from '../imgs/아파트.png';
import 해운대 from '../imgs/해운대.png';
import 산산 from '../imgs/산산.png';

const listings = [
    {
        id: 1,
        title: "서울의 아늑한 아파트",
        price: 1000000,
        rating: 4.9,
        imageUrl: `${아파트}`
    },
    {
        id: 2,
        title: "서울의 아늑한 아파트22",
        price: 1000,
        rating: 5.5,
        imageUrl: `${아파트}`
    },
    {
        id: 3,
        title: "바다가 보이는 해운대",
        price: 1000220,
        rating: 4.9,
        imageUrl: `${해운대}`
    },
    {
        id: 4,
        title: "산이 보이는 산",
        price: 44000220,
        rating: 4.9,
        imageUrl: `${산산}`
    }
];

function CardContainer() {
    return(
        <div className="card-container">
            {listings.map(listings => (
                <Card key={listings.id} {...listings} />
            ))}
        </div>
    );
}
export default CardContainer;
