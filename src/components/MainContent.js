import React from 'react';
import Stcok from './Stock';
import OrderBy from './OrderBy';
import ProductNumber from './ProductNumber';


const MainContent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <ProductNumber />
                </div>
                <div className="col-lg-6">
                    <OrderBy />
                </div>
            </div>
            <div className="row">
                <Stcok />
            </div>
            
        </div>
    )
}

export default MainContent;