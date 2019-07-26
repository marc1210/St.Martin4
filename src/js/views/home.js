import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
					<link
						href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
						rel="stylesheet"
						id="bootstrap-css"
					/>
					{/*---- Include the above in your HEAD tag --------*/}
					{/* class="jumbotron"*/}

					<div className="jumbotron">
						<img src="https://www.scross.co.za/wp-content/uploads/2017/04/St-Martin-de-Porres.jpg" />
						<div className="container">
							<p className="lead">
								<a className="btn btn-success btn-lg" href="http://www.ololourdes.org/" role="button">
									Visit Now
								</a>
							</p>
						</div>
					</div>
				</div>

				<link href="http://www.ololourdes.org/" rel="stylesheet" id="bootstrap-css" />
				{/*----//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css HEAD tag --------*/}
				<div className="container">
					<div className="row">
						<div className="col-md-1" />
						<div className="col-md-6">
							<div id="postlist">
								<div className="panel">
									<div className="panel-heading">
										<div className="text-center">
											<div className="row">
												<div className="col-sm-9">
													<h3 className="pull-left">Who are we?</h3>
												</div>
												<div className="col-sm-3">
													<h4 className="pull-right">
														<small>
															<em>
																2014-07-30
																<br />
																18:30:00
															</em>
														</small>
													</h4>
												</div>
											</div>
										</div>
									</div>
									<div className="panel-body">
										We are the St. Martin de Porres Visual and Performing Arts Ministry, located at
										Our Lady of Lourdes Catholic Church in Miami, FL. Our ministry was started by
										Rosa and Jennifer Springer back in 2008 and we have performed this service since
										2010. Once a year, we bring joy and happiness to the residents who have been
										abandoned by their friends and family, at nursing homes. We: ● bring talents and
										concerts; including dance and handmade cards to the patients. ● look for talent
										but also for people that will animate the residents with dementia. To find out
										about the types of gifts we bring, you must attend a meeting as we have a very
										specific criteria we have to meet as this is a very delicate population with
										unique health problems. Since the beginning, we have catered to those with busy
										schedules and so we only get together in the weeks approaching the visit, except
										for birthdays and holidays. We have plans in the works to start attending
										volunteer events as the St. Martin de Porres group, to socialize with the rest
										of the community. We try to simulate St. Martin de Porres’ humility via this
										service because we visit the most needy and outcasted individuals; they have
										been abandoned by the very ones they loved. For any other questions, please
										contact us to attend a meeting and find out! //
										<a href="#">Read more</a>
									</div>
									<div className="panel-footer">
										<span className="label label-default">Welcome</span>{" "}
										<span className="label label-default">Updates</span>{" "}
										<span className="label label-default">July</span>
									</div>
								</div>
								<div className="panel">
									<div className="panel-heading">
										<div className="text-center">
											<div className="row">
												<div className="col-sm-9">
													<h3 className="pull-left">Who was St. Martin de Porres?</h3>
												</div>
												<div className="col-sm-3">
													<h4 className="pull-right">
														<small>
															<em>2014-07-30 18:30:00</em>
														</small>
													</h4>
												</div>
											</div>
										</div>
									</div>
									<div className="panel-body">
										<a href="#" className="thumbnail">
											<img
												alt="Image"
												src="http://sandradi.files.wordpress.com/2009/11/saint-martin-de-porres.jpg?w=400&h=649"
											/>
										</a>
										{/*<p>Who was St. Martin de Porres?</p>*/}
										St. Martin de Porres was a very poor mulatto who was born in the 1500s. His mom
										was a freed slae from Panama and his father a Spaniard. Martin was born in Peru.
										His birth certificate read “father unknown” because his father had abandoned
										him, his sister, and his mother because they weren’t white.
									</div>
									{/* <div className="panel-footer">
									 	<span className="label label-default">Image</span>{" "}
									 	<span className="label label-default">Updates</span>{" "}
									 	<span className="label label-default">July</span>
									</div>*/}
								</div>
							</div>
							<div className="text-center">
								<a href="#" id="loadmore" className="btn btn-primary">
									Older Posts...
								</a>
							</div>
						</div>

						<div className="col-md-1" />
						<div className="col-md-3" />
						<div className="col-md-1" />
					</div>
				</div>
			</div>
		);
	}
}
