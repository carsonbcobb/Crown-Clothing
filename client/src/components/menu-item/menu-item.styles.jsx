import styled from "styled-components";

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? "380px" : "240px")};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	transition: 1s ease;
	box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.7);

	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
		margin-right: 7.5px;
	}
	&:last-child {
		margin-left: 7.5px;
	}
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		max-width: 50%;
		margin: 5px;
		.content {
			padding: 10px;
		}
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		max-width: 50%;
		margin: 5px;
		.content {
			padding: 10px;
		}
	}
	@media only screen and (max-width: 320px) and (max-height: 568px) and (-webkit-device-pixel-ratio: 2) {
		max-width: 50%;
		margin: 3px;
		.content {
			padding: 5px;
		}
	}
`;

export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	transition: 2s ease;
`;

export const ContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
	transition: 1s ease;
`;

export const ContentTitle = styled.span`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
