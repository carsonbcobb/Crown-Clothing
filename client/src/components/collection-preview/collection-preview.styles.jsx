import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
	transition: 0.5s ease;
	&:hover {
		color: #424d58;
	}
`;

export const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		button {
			font-size: 0.7rem;
			margin: 0;
			padding: 0;
		}
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		button {
			font-size: 0.7rem;
			margin: 0;
			padding: 0;
		}
	}
	@media only screen and (max-width: 320px) and (max-height: 568px) and (-webkit-device-pixel-ratio: 2) {
		button {
			font-size: 0.5rem;
			margin: 0;
			padding: 0;
		}
	}
`;
