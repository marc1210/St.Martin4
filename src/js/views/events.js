import React from "react";

import "../../styles/events.scss";

export class Events extends React.Component {
	render() {
		return (
			<div>
				<link
					href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
					rel="stylesheet"
					id="bootstrap-css"
				/>
				{/*---- Include the above in your HEAD tag --------*/}
				{/* Container, Row, and Column used for illustration purposes */}
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
							{/* Fluid width widget */}
							<div className="panel panel-danger">
								<div className="panel-heading">
									<h3 className="panel-title">
										<span className="glyphicon glyphicon-calendar" />
										&nbsp; Calendar Events
									</h3>
								</div>
								<div className="panel-body">
									<ul className="media-list">
										<li className="media">
											<div className="media-left">
												<div className="panel panel-danger text-center date">
													<div className="panel-heading month">
														<span className="panel-title strong">Sept</span>
													</div>
													<div className="panel-body day text-danger">23</div>
												</div>
											</div>
											<div className="media-body">
												<h4 className="media-heading">Nursing Home</h4>
												<p />
											</div>
										</li>
										<li className="media">
											<div className="media-left">
												<div className="panel panel-danger text-center date">
													<div className="panel-heading month">
														<span className="panel-title strong">Nov</span>
													</div>
													<div className="panel-body text-danger day">16</div>
												</div>
											</div>
											<div className="media-body">
												<h4 className="media-heading">pot lock</h4>
												<p />
											</div>
										</li>
										<li className="media">
											<div className="media-left">
												<div className="panel panel-danger text-center date">
													<div className="panel-heading month">
														<span className="panel-title strong all-caps">Dec</span>
													</div>
													<div className="panel-body text-danger day">10</div>
												</div>
											</div>
											<div className="media-body">
												<h4 className="media-heading">Marcelo Bday</h4>
												<p />
											</div>
										</li>
									</ul>
									<a href="#" className="btn btn-default btn-block">
										More Events »
									</a>
								</div>
							</div>
							{/* End fluid width widget */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
