import React from 'react'

const Sizes = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 ">
                    <h4 className="btn-bold">Size:</h4>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button class="btn btn-default btn-cercle">XS </button>
                    <button class="btn btn-default btn-cercle">S </button>
                    <button class="btn btn-default btn-cercle">M</button>
                    <button class="btn btn-default btn-cercle">ML </button><br />

                </div>
                <div className="col-lg-12">
                    <button class="btn btn-default btn-cercle">L</button>
                    <button class="btn btn-default btn-cercle">XL </button>
                    <button class="btn btn-default btn-cercle">XXL</button>


                </div>

            </div>


        </div>
    )
}
export default Sizes;