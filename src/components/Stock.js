import React from 'react'

const Stock = (props) => {
    const {img} = props;
    return (
        
            <div className="col-lg-3">
                <div className="thumbnail">
                    <button type="button" className="btn btn-primary btn-color btn-position">
                        Free shipping
										</button>
                    <img src={img} alt="..." className="img-responsive" />
                    <div className="caption">
                        <h5>Cat Tee Black T-Shirt</h5>
                        <hr />
                        <p className="text-center">
                            $<b>10</b>.90
								        	or <h5 className="text-center" id="price-color">9x$1.21</h5>
                        </p>
                        <p><a href="#" className="btn btn-primary btn-color btn-addC-size" role="button">Add To card</a></p>
                    </div>
                </div>
            </div>

        
    )
}

export default Stock;