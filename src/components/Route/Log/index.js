import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import gsap from "gsap";

const Log = () => {
	const [lienLogin, setLienLogin] = useState(false);
	const [lienRegister, setLienRegister] = useState(true);
	const loginBox = document.getElementsByClassName("login-box");
	const registerBox = document.getElementsByClassName("register-box");
	const robot = document.getElementsByClassName("robotDiv");

	const handleClick = (e) => {
		if (e.target.id === "login") {
			setLienLogin(true);
			setLienRegister(false);
			gsap.to(registerBox, {
				duration: 0.5,
				opacity: 0,
				ease: "power2-out",
				onComplete: () => {
					gsap.to(loginBox, {
						duration: 0.5,
						opacity: 1,
						ease: "power2-out",
					});
				},
			});
			gsap.to(robot, {
				duration: 1,
				rotation: 0,
				ease: "power2-out",
			});
		} else if (e.target.id === "register") {
			setLienLogin(false);
			setLienRegister(true);
			gsap.to(loginBox, {
				duration: 0.5,
				opacity: 0,
				ease: "power2-out",
				onComplete: () => {
					gsap.to(registerBox, {
						duration: 0.5,
						opacity: 1,
						ease: "power2-out",
					});
				},
			});
			gsap.to(robot, {
				duration: 1,
				rotateZ: "360deg",
				ease: "power2-out",
			});
		}
	};

	return (
		<>
			<h4>Entretien technique Grégoire formulaire</h4>
			<div className="form-container">
				<ul>
					<div className="register" onClick={handleClick} id="register">
						<li>S'inscrire</li>
					</div>
					<div className="login" onClick={handleClick} id="login">
						<li>Se connecter</li>
					</div>
				</ul>
				{/* {lienLogin && <SignInForm />}
				{lienRegister && <SignUpForm />} */}
				<SignInForm />
				<SignUpForm />
			</div>
		</>
	);
};

export default Log;
