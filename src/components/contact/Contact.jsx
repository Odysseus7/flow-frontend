import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
	const form = useRef();
	const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICEID;
	const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATEID;
	const USER_ID = process.env.REACT_APP_EMAIL_USERID;

	const handleOnSubmit = (event) => {
		event.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
			(result) => {
				Swal.fire({
					icon: "success",
					title: "Yay, thank you for reaching out to me!",
				});
			},
			(error) => {
				Swal.fire({
					icon: "error",
					title: "Ooops, something went wrong",
					text: error.text,
				});
			}
		);
		event.target.reset();
	};

	return (
		<section className="main main__contact">
			<main className="contact__form__container">
				<h1 className="primary-heading">Send me a message!</h1>
				<form ref={form} onSubmit={handleOnSubmit} className="contact__form">
					<fieldset className="contact__input__container">
						<input
							id="form-input-control-email"
							label="Email"
							name="sender_email"
							placeholder="Email"
							type="email"
							className="contact__input"
							required
						/>
						<input
							id="form-input-control-last-name"
							label="Name"
							name="sender_name"
							placeholder="Name"
							type="text"
							className="contact__input"
							required
						/>
					</fieldset>

					<textarea
						id="form-textarea-control-opinion"
						label="Message"
						name="sender_message"
						placeholder="Message…"
						className="contact__message"
						rows="7"
						required
					/>
					<button type="submit" className="contact__btn">
						Submit
					</button>
				</form>
			</main>
		</section>
	);
}

export default Contact;
