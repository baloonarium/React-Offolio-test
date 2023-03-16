import React, { useState } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../../lotties/conffeti.json";

const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/user/login", {
				email,
				password,
			})
			.then(function (response) {
				if (response.data.errors) {
					console.log(response.data.errors);
				} else {
					window.location = "/";
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<div className="robotDiv">
				<Player
					autoplay
					loop
					src={animationData}
					style={{ height: "770px", width: "770px" }}
					className="robot"
				></Player>
			</div>
			<div className="login-box">
				<h2>Se connecter</h2>
				<form onSubmit={handleLogin}>
					<div className="user-box">
						<input
							type="text"
							name="email"
							required=""
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
						/>
						<label>Email</label>
					</div>
					<div className="user-box">
						<input
							type="password"
							name="password"
							required=""
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							value={password}
						/>
						<label>Mot de passe</label>
					</div>
					<a onClick={handleLogin}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Envoyer
					</a>
				</form>
			</div>
		</div>
	);
};

export default SignInForm;
