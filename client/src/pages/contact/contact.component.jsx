import React from "react";
import {
	TitleContainer,
	InfoContainer,
	ContactContainer,
} from "./contact.styles";

const ContactPage = () => (
	<ContactContainer>
		<TitleContainer>
			<h2>Contact Us</h2>
		</TitleContainer>
		<InfoContainer>
			<p>
				"The customer is always right" is a famous business slogan. The
				underlying truth behind this statement is recognizing that customers are
				the life blood for any business. Understanding the importance of good
				customer service is essential for a healthy business in creating new
				customers, keeping loyal customers, and developing referrals for future
				customers. That's why we are here for you 24/7. Whatever question or
				concern you have, we are here to help you day and night.
			</p>
			<br />
			<span>+1 559-555-5555</span>
			<br />
			<span>contact@crown-clothing-company.com</span>
			<br />
			<span>1255 W Fulton St. Fresno, CA</span>
			<br />
		</InfoContainer>
	</ContactContainer>
);

export default ContactPage;
