import React from 'react';

const BagsData = ({post}) => {

    const style = {
        color: "#fff",
        background: "black",
    }
    return (
        <>
            <h1 style={style}>{post.name}</h1>
            <p>{post.price}</p>
        </>
    );
};

export default BagsData;
