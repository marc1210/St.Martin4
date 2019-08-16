import React from "react";

import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div>
				{/*---- Include the above in your HEAD tag --------*/}

				<div className="">
					<div id="app" />
					<div className="row">
						<div className="col-md-9">
							<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
								<ol className="carousel-indicators">
									<li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
									<li data-target="#carousel-example-generic" data-slide-to={1} />
									<li data-target="#carousel-example-generic" data-slide-to={2} />
								</ol>{" "}
								<div className="carousel-inner" role="listbox">
									<div className="carousel-item active">
										<img
											style={{
												width: "820px",
												height: "600px"
											}}
											className="banner img-fluid"
											src="https://www.bing.com/th?id=OIP.qtu87Phu1VVtqHLw3Ir5SAHaE7&pid=Api&rs=1"
											alt="First slide"
										/>
										<div className="carousel-caption">
											<h3>St. Martin de Porres Visual and Performing Arts Ministry</h3>
											<p>Pray for US!</p>
											<a href="/espanol">Click here!</a>
										</div>
									</div>
									<div className="carousel-item">
										<img
											className="banner img-fluid"
											src="http://4.bp.blogspot.com/-_ZH-I2Rgx7M/UJVnYe-IyjI/AAAAAAAAXfA/tGstYngkAu4/s1600/estampa-san-martc3adn-de-porres.jpg"
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="banner img-fluid"
											src="http://www.discountcatholicproducts.com/Assets/33/224/img/546-SH.jpg"
											alt="Third slide"
										/>
									</div>
								</div>
								<a
									className="left carousel-control"
									href="#carousel-example-generic"
									role="button"
									data-slide="prev">
									<span className="icon-prev" aria-hidden="true" />
									<span className="sr-only">Previous</span>
								</a>{" "}
								<a
									className="right carousel-control"
									href="#carousel-example-generic"
									role="button"
									data-slide="next">
									<span className="icon-next" aria-hidden="true" />
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
						<div className="col-md-3">
							<h4>Who was St. Martin de Porres?</h4>
							<p>
								He was a poor mulatto from Peru, who wanted to help the outcasts and the suffering. In
								the face of hatred, he chose to give more love.
							</p>
							<h5>Why is he important?</h5>
							<p>
								He teaches us that all of us are worthy of loving and being loved. He became sanctified
								in Christ’s love through his works and teaches us that we can do the same.
							</p>
							<h5>What do we do?</h5>

							<p>
								We visit a nursing home, whose members’ family and friends have abandoned them, and we
								bring them love and happiness through MUSIC, DANCING, AND CRAFTS.
							</p>
							<h5>How can I find out how to participate?</h5>
							<p>
								Fill out your information on the spreadsheet on the table. Contacts: Rosa or Jenny
								Email: joly10@msn.com Phone: 786.495.9846 o 305.801.8951
							</p>
							<h5>Who participates?</h5>
							<p>ALL AGES</p>
						</div>
					</div>
					<div className="dropdown-divider" />
					<div className="row">
						<div className="col-md-9">
							<h4 className="media-heading">Who are we?</h4>
							<div className="row">
								<div className="media">
									<a className="media-left media-middle" href="#">
										<img
											className="img-media media-object"
											src="https://bloggingbi.files.wordpress.com/2014/01/notes_2_preview_p.png"
											alt="photo from online"
										/>
									</a>
									<div className="media-body">
										<h4 className="media-heading" />
										<p>
											We are the St. Martin de Porres Visual and Performing Arts Ministry, located
											at Our Lady of Lourdes Catholic Church in Miami, FL. Our ministry was
											started by Rosa and Jennifer Springer back in 2008 and we have performed
											this service since 2010.
										</p>
										<p>
											Once a year, we bring joy and happiness to the residents who have been
											abandoned by their friends and family, at nursing homes.
										</p>
										<ul>
											<li>
												bring talents and concerts; including dance and handmade cards to the
												patients.
											</li>
											<li>
												look for talent but also for people that will animate the residents with
												dementia.
											</li>
										</ul>
										<p>
											To find out about the types of gifts we bring, you must attend a meeting as
											we have a very specific criteria we have to meet as this is a very delicate
											population with unique health problems.
										</p>
										<p>
											Since the beginning, we have catered to those with busy schedules and so we
											only get together in the weeks approaching the visit, except for birthdays
											and holidays. We have plans in the works to start attending volunteer events
											as the St. Martin de Porres group, to socialize with the rest of the
											community.
										</p>
										<p className="font-weight-bold">
											We try to simulate St. Martin de Porres’ humility via this service because
											we visit the most needy and outcasted individuals; they have been abandoned
											by the very ones they loved.
										</p>
										<ul className="list-inline">
											<li className="list-inline-item">
												<a href="#">
													<i className="fas fa-drum" /> To the top:
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="media">
									<a className="media-left media-middle" href="#">
										<img
											className="img-media media-object"
											src="https://jackumano.files.wordpress.com/2014/01/musical_note.jpg"
											alt="online lookup"
										/>
									</a>
									<div className="media-body">
										<h4 className="media-heading">Who was St. Martin de Porres?</h4>
										<p>
											St. Martin de Porres was a very poor mulatto who was born in the 1500s. His
											mom was a freed slae from Panama and his father a Spaniard. Martin was born
											in Peru. His birth certificate read “father unknown” because his father had
											abandoned him, his sister, and his mother because they weren’t white.
										</p>
										<p>
											St. Martin learned a little bit of everything...from barber to surgeon. He
											was a very devout Christian and wanted to join the seminary, but back then
											(and sometimes in today’s date), there was a lot of racism. Even in the
											church. The nuns would make fun of his color, and the seminary did not allow
											him to be a priest. Despite all of this, he was happy with and accepted
											being a religious brother. He would cure the sick, do the cleaning of the
											facility, and he would feed the animals, even the rats.
										</p>
										<p>
											During the times of the plague, many people became sick, and no one wanted
											to nurse these patients. They were very contagious, and so, they were locked
											behind many doors. St. Martin didn’t care about any of that, and his faith
											was so strong and his desire to help the most needy, that he was able to fly
											through several doors to get to the sick person, who which for sure was
											white. Like others that were so close to God, St. Martin had supernatural
											powers. He had the ability to heal other instantaneously, he had a special
											connection with the animals, and he had the ability of bilocation (being at
											two places at once).
										</p>
										<p>He was finally ordained near the end of his life.</p>

										<p>His humility was what brought him to be a saint.</p>

										<ul className="list-inline">
											<li className="list-inline-item">
												<a href="#">
													<i className="fas fa-music" /> to the top:
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="media">
									<a className="media-left media-middle" href="#">
										<img
											className="img-media media-object"
											src="https://www.craftoutlet.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/i/m/image_6335.jpg"
											alt="Online lookup"
										/>
									</a>
									<div className="media-body">
										<h4 className="media-heading">Article Name</h4>
										<p />
										<p />
										<ul className="list-inline">
											<li className="list-inline-item">
												<a href="#">
													<i className="fa fa-user" /> To the top:
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							{/*<h2>Heading </h2>*/}
							<div className="dropdown-divider" />
							<div className="media">
								<a className="media-left media-middle" href="#">
									<img
										className="img-media media-object"
										src="http://blog.barterquest.com/wp-content/uploads/2012/09/music-notes-Clip-art-150x150.jpg"
										alt="Online look up"
									/>
								</a>
								<div className="media-body">
									<h4 className="media-heading" />
									<p>
										<a href="#">
											<i className="fa fa-link" />
											See more
										</a>
									</p>
								</div>
							</div>
							<div className="media">
								<a className="media-left media-middle" href="#">
									<img
										className="img-media media-object"
										src="https://ecdn.teacherspayteachers.com/thumbitem/Music-notes-clipart-musical-clip-art-1450612-1410841503/large-1450612-1.jpg"
										alt="Online look up"
									/>
								</a>
								<div className="media-body">
									<h4 className="media-heading" />
									<p>
										<a href="#" />
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="dropdown-divider" />
				</div>
			</div>
		);
	}
}
