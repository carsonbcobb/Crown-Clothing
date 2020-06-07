import styled from "styled-components";

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CollectionTitle = styled.h2`
	font-size: 3.5rem;
	margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
	& > div {
		margin-bottom: 30px;
	}

	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 5px;
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 5px;
	}
`;

CollectionItemsContainer.displayName = "CollectionItemsContainer";
