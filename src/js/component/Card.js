import React from "react";

const Card = () => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<img
				src="http://www.gabriela-biechl.at/images/pias%20aura-100x100-2004-sold.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="row text-inlene">
				<div className="col-lg-3 col-md-6 mb-4"> </div>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
