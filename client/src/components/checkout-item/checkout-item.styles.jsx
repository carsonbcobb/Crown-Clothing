import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border: 1px solid #f8f8ff;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
	background-color: #95a1ac;
	color: #424d58;
	@media screen and (max-width: 800px) {
		font-size: 18px;
	}
`;

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 10px;
	padding-left: 10px;

	img {
		width: 75%;
	}
`;

export const TextContainer = styled.span`
	width: 23%;
	@media screen and (max-width: 800px) {
		width: 22%;
	}
`;

export const QuantityContainer = styled(TextContainer)`
	display: flex;
	span {
		margin: 0 10px;
	}
	div {
		cursor: pointer;
	}
`;

QuantityContainer.displayName = "QuantityContainer";

export const RemoveButtonContainer = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;

RemoveButtonContainer.displayName = "RemoveButtonContainer";
