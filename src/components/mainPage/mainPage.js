import React from 'react';
import './style.css'

const mainPage = ({items}) => {
    console.log(items);
    return(
        <div className="container">
            <div className="row align-items-center">
            {items.map(({id, name, price,image,color}) =>
                {
                    return(
                <div key={id} className="col-4">
                            <p>
                                <img  src={image} alt={image} className="img-thumbnail"/>
                            </p>
                            <p>
                                {name}
                            </p>
                            <p>
                                {color}
                            </p>
                            <p>
                                ${price}
                            </p>
                </div>
                    )
                }
            )}
                </div>
            </div>
    )
};

export default mainPage;


