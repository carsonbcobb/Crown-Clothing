import styled from "styled-components";

export const ContactContainer = styled.div`
	height: 100vh;
	width: 100%;
	color: #f8f8ff;
	background-color: rgba(220, 220, 220, 0.3);
`;

export const TitleContainer = styled.div`
	height: 20vh;
	text-align: center;

	h2 {
		font-size: 3.5rem;
		transform: translateY(100%);
	}
`;

export const InfoContainer = styled.div`
	height: 80vh;
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	transform: translateY(20%);
	p {
		font-size: 1.75rem;
	}
	span {
		font-size: 1.75rem;
	}
`;
