import styled from "styled-components";

export const CollectionsOverviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		span {
			font-size: 0.8rem;
		}
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		span {
			font-size: 0.8rem;
		}
	}
`;
