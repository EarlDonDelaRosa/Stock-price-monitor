import React, { useState } from "react";
import useFunction from "./useFunction";

function HomePage() {
    const {
        priceSource,
        ticker,
        priceSrc,
        showTicker1,
        showTicker2,
        onChangePrice,
        onChangeTicker
    } = useFunction();
    const show = {display: 'none'};
    const itms = 4;

    // console.log(priceSource)

    return (
        <React.Fragment>
            <div className="App">
                <span style={show}>Hello</span>
                <div className="container col-4 my-5">
                    <div className="row mb-3">
                        <div className="col-5">
                            <label className="form-label">Price source</label>
                        </div>
                        <div className="col-7">
                            <select 
                                name="price" 
                                id="price" 
                                // value={selected} 
                                className="form-select" 
                                onChange={onChangePrice}
                                >
                                <option defaultValue={''}>Please select</option>
                                {
                                    priceSource.map((item, index) => (
                                        <option key={index}>{item.source}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            <label className="form-label">Ticker</label>
                        </div>
                        <div className="col-7">
                            <select 
                                name="price" 
                                id="price" 
                                // value={selected} 
                                className="form-select" 
                                onChange={onChangeTicker}
                                >
                                <option defaultValue={''}>Please select</option>
                                {
                                    ticker.map((item, index) => (
                                        <option key={index}>{item.company}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Time</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody style={{}}>
                            {
                                priceSrc.map((item, index) => (
                                    <tr key={index}>
                                        <th>{item.date}</th>
                                        <td style={showTicker1}>{item.IBMprice}</td>
                                        <td style={showTicker2}>{item.Sonyprice}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage