import React from 'react';
import Stcok from './Stock';
import OrderBy from './OrderBy';
import ProductNumber from './ProductNumber';

import zak from '../images/adwoa.jpg';
import awalcho from '../images/awal.jpg';
import zak1 from '../images/zak.jpg';



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
                <Stcok img= {zak} />
                <Stcok img= {awalcho} />
                <Stcok img= {zak1} />  
            </div>     
        </div>
    )
}

export default MainContent;