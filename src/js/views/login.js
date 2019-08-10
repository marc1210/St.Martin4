import React from "react";

import "../../styles/login.scss";

export class Login extends React.Component {
	render() {
		return (
			<div>
				<link
					href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
					rel="stylesheet"
					id="bootstrap-css"
				/>
				{/*---- Include the above in your HEAD tag --------*/}
				<link
					href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
					rel="stylesheet"
				/>
				<div className="container">
					<div className="col-md-6 mx-auto text-center">
						<div className="header-title">
							<h1 className="wv-heading--title">Check out — it’s free!</h1>
							<h2 className="wv-heading--subtitle">
								“Even the smallest act of caring for another person is like a drop of water -it will
								make ripples throughout the entire pond.” – Jessy and Bryan Matteo
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 mx-auto">
							<div className="myform form ">
								<form action method="post" name="login">
									<div className="form-group">
										<input
											type="text"
											name="name"
											className="form-control my-input"
											id="name"
											placeholder="Name"
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											name="email"
											className="form-control my-input"
											id="email"
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<input
											type="number"
											min={0}
											name="phone"
											id="phone"
											className="form-control my-input"
											placeholder="Phone"
										/>
									</div>
									<div className="text-center ">
										<button type="submit" className=" btn btn-block send-button tx-tfm">
											Create Your Free Account
										</button>
									</div>
									<div className="col-md-12 ">
										<div className="login-or">
											<hr className="hr-or" />
											<span className="span-or">or</span>
										</div>
									</div>
									<div className="form-group">
										<a className="btn btn-block g-button" href="#">
											<i className="fa fa-google" /> Sign up with Google
										</a>
									</div>
									<p className="small mt-3">
										By signing up, you are indicating that you have read and agree to the{" "}
										<a href="#" className="ps-hero__content__link">
											Terms&nbsp;of&nbsp;Use
										</a>{" "}
										and <a href="#">Privacy&nbsp;Policy</a>.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
