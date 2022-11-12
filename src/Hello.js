import React from 'react';
import BagsData from "./BagsData";

const Hello = ({name,birthDay}) => {
    const age = new Date().getFullYear() - birthDay

    const bags = [
        {
            id: 5,
            name: "Handbag",
            price: 24
        },
        {
            id: 6,
            name: "hand bag Korean",
            price: 12
        },
        {
            id: 1,
            name: "Women's bag",
            price: 45
        },
        {
            id: 2,
            name: "waterproofed",
            price: 34
        },
        {
            id: 3,
            name: "Handbag",
            price: 24
        },
        {
            id: 4,
            name: "hand bag Korean",
            price: 12
        }

    ]

    return (
        <div>
            <h1>Hey {name}</h1>
            <p>Age: {age}</p>
            {bags.map((post)=> <BagsData post={post} key={post.id}/>)}
        </div>
    );
};

export default Hello;
