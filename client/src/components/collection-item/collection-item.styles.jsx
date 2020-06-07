import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	&:hover {
		.image {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: flex;
		}
	}
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		width: 45vw;
		button {
			margin: 0;
			padding: 0;
			font-size: 1rem;
		}
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		width: 45vw;
		button {
			margin: 0;
			padding: 0;
			font-size: 1rem;
		}
	}
`;

export const AddButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 0px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	transition: 0.25s ease;
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: space-between;
	font-size: 1.5rem;
	padding-left: 10px;
	padding-right: 10px;
	background-color: rgba(66, 77, 88, 0.3);
	@media (min-width: 800px) and (min-height: 600px) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 1rem;
	}
`;

export const NameContainer = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
	width: 10%;
	text-align: right;
`;
