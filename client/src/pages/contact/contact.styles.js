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
	@media only screen and (min-width: 1366px) and (max-height: 1024px) and (-webkit-device-pixel-ratio: 2) {
		h2 {
			font-size: 5.5rem;
		}
	}
	@media (min-width: 1020px) and (min-height: 1080px) {
		h2 {
			font-size: 6rem;
		}
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
		color: #424d58;
	}
	@media (min-width: 800px) and (min-height: 600px) {
		span {
			font-size: 1.25rem;
		}
		p {
			margin-bottom: 8%;
		}
	}
	@media only screen and (min-width: 1366px) and (max-height: 1024px) and (-webkit-device-pixel-ratio: 2) {
		span {
			font-size: 2rem;
		}
		p {
			font-size: 2.5rem;
			margin-bottom: 3%;
		}
	}
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		span {
			font-size: 1rem;
		}
		p {
			font-size: 1.3rem;
			margin-bottom: 1%;
		}
	}
	@media (min-width: 1020px) and (min-height: 1080px) {
		p {
			font-size: 3rem;
			margin-bottom: 0.5%;
		}
		span {
			font-size: 2.5rem;
		}
	}
`;
