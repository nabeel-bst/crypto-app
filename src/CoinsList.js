import React, { useState, useRef, useEffect } from "react";

const CoinsList = ({ items }) => {




    return (
        <div className="parent">
            {items.map(item => (

                <div className="list-item" key={item.id}>
                    <div className='l-it' >
                        <div className="item-name">
                            <img className="item-image" src={item.image}>
                            </img>
                            <h3 className="bt">
                                {item.name}
                            </h3>
                        </div>
                        <div className="item-price">
                            <h3 className="bt">
                                Rs.{item.current_price}
                            </h3>

                        </div>
                        <div className="item-percent">
                            <h3 className="bt" style={{ color: item.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                                {item.price_change_percentage_24h}
                            </h3>

                        </div>
                        <div className="mkt-col-str">
                            <div className="mkt-cap">
                                <h3 className="bt">
                                    MKT Cap:
                                </h3>

                            </div>
                            <div className="mkt-cap">
                                <h3 className="bt">
                                    Rs.{item.market_cap}
                                </h3>

                            </div>
                        </div>




                    </div>
                    <div className="hd">
                    </div>
                </div>

            ))}
        </div>
    );
}

export default CoinsList;