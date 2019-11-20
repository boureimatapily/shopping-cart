import React from 'react'

const OrderBy = () => {
    return(
        <div className="container">
            <div className="row">
            <div class="col-lg-6">
							<div class="col-lg-3">
								<h5>Order by</h5>
							</div>
								<div class=" col-lg-3 dropdown">
									
									  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
									    Select
									    <span class="caret"></span>
									  </button>
									  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
									    <li><a href="#">Action</a></li>
									  </ul>
								</div>	
						</div>

            </div>
           
        </div>
    )
}

export default OrderBy;