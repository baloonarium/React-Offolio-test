import React, { useState } from "react";
import axios from "axios";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import animationData from '../../../lotties/conffeti.json';

const SignUpForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [pseudo, setPseudo] = useState("");

	const handleRegister = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/user/register", {
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

		<div className="register-box">

			<h2>S'inscrire</h2>
			<form onSubmit={handleRegister}>
			<div className="user-box">
					<input type="text" name="" required=""  />
					<label>Pseudo</label>
				</div>
				<div className="user-box">
					<input type="text" name="" required=""  />
					<label>Email</label>
				</div>
				<div className="user-box">
					<input type="password" name="" required="" />
					<label>Mot de passe</label>
				</div>
				<a href="#">
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

export default SignUpForm;
