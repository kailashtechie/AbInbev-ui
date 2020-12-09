import React, { useState } from "react";
import { FormText } from "react-bootstrap";
import "./Form.css";

const Form = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		contact_number: "",
		country: "",
		city: "",
		address: "",
		password: "",
		confirm_password: "",
	});

	const [errorMessage, setErrorMessage] = useState({
		username: "",
		email: "",
		contact_number: "",
		country: "",
		city: "",
		address: "",
		password: "",
		confirm_password: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => {
			const newData = { ...prevData };
			newData[name] = value;
			handleValidation(name, value);
			return newData;
		});
	};

	const handleValidation = (name, value) => {
		switch (name) {
			case "password":
				if (value.length < 8) {
					setErrorMessage(errmsg => {
						errmsg.password =
							"Password length must be greater than 8 characters";
						return {
							...errmsg,
						};
					});
				} else if (value.length === 0) {
					setErrorMessage(errmsg => {
						errmsg.password = "*Required";
						return {
							...errmsg,
						};
					});
				} else {
					setErrorMessage(errmsg => {
						errmsg.password = "";
						return {
							...errmsg,
						};
					});
				}
				break;

			case "email":
				var pattern = new RegExp(
					/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
				);

				if (value.length === 0) {
					setErrorMessage(errmsg => {
						errmsg.email = "*Required";
						return {
							...errmsg,
						};
					});
				} else if (!pattern.test(value)) {
					setErrorMessage(errmsg => {
						errmsg.email = "Please enter valid email address";
						return {
							...errmsg,
						};
					});
				} else {
					setErrorMessage(errmsg => {
						errmsg.email = "";
						return {
							...errmsg,
						};
					});
				}
				break;

			case "confirm_password":
				if (value.length === formData.password.length) {
					if (value === formData.password) {
						setErrorMessage(errmsg => {
							errmsg.confirm_password = "";
							return {
								...errmsg,
							};
						});
					} else {
						setErrorMessage(errmsg => {
							errmsg.confirm_password = "Password didn't match";
							return {
								...errmsg,
							};
						});
					}
				} else {
					setErrorMessage(errmsg => {
						errmsg.confirm_password = "Password didn't match";
						return {
							...errmsg,
						};
					});
				}
				break;
		}
	};

	const handleSubmit = () => {
		console.log("formData>>>>>>>>>>>>", formData);
	};

	return (
		<div className="form-div d-flex flex-column text-center p-4">
			<h2 className="text-white">Registration Form</h2>
			<form action="">
				<div className="mb-2">
					<input
						className="form-input-width rounded border-0"
						type="text"
						name="username"
						value={formData.username}
						placeholder="Username"
						onChange={handleChange}
					/>
					<br />
					{errorMessage.username.length > 0 && (
						<span className="text-danger small">
							Username should be of minimum 8 character
						</span>
					)}
				</div>
				<div className="mb-2">
					<input
						className="form-input-width rounded border-0"
						type="mail"
						name="email"
						value={formData.email}
						placeholder="E-mail"
						onChange={handleChange}
					/>
					<br />
					{errorMessage.email.length > 0 && (
						<span className="text-danger small">
							{errorMessage.email}
						</span>
					)}
				</div>
				<div className="mb-2">
					<input
						className="form-input-width rounded border-0"
						type="number"
						name="contact_number"
						value={formData.contact_number}
						placeholder="Contact Number"
						onChange={handleChange}
					/>
					<br />
					{errorMessage.contact_number.length > 0 && (
						<span className="text-danger small"></span>
					)}
				</div>
				<div className="mb-2">
					{" "}
					<input
						className="form-input-width rounded border-0"
						type="text"
						name="country"
						value={formData.country}
						placeholder="Country"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-2">
					{" "}
					<input
						className="form-input-width rounded border-0"
						type="text"
						name="city"
						value={formData.city}
						placeholder="City"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-2">
					<input
						className="form-input-width  rounded border-0"
						type="text"
						name="address"
						value={formData.address}
						placeholder="Address"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-2">
					{" "}
					<input
						className="form-input-width rounded border-0"
						type="text"
						name="password"
						value={formData.password}
						placeholder="Password"
						onChange={handleChange}
					/>
					<br />
					{errorMessage.password.length > 0 && (
						<span className="text-danger small">
							{errorMessage.password}
						</span>
					)}
				</div>
				<div className="mb-2">
					<input
						className="form-input-width rounded border-0"
						type="text"
						name="confirm_password"
						value={formData.confirm_password}
						placeholder="Confirm Your Password"
						onChange={handleChange}
					/>
					<br />
					{errorMessage.confirm_password.length > 0 && (
						<span className="text-danger small">
							{errorMessage.confirm_password}
						</span>
					)}
				</div>
				<div>
					{" "}
					<input
						className="btn btn-primary"
						type="submit"
						onClick={handleSubmit}
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
