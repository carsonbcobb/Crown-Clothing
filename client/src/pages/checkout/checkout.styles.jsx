import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	color: #f8f8ff;
	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;

export const CheckoutHeaderContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border-bottom: 1px solid #f8f8ff;
	background-color: #424d58;
	font-size: 1.2rem;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  margin-left: 15px;
  margin-right: 15px;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%
    &:last-child {
      width: 12%;
		}
    }
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1rem;
	}
`;

export const TotalContainer = styled.div`
	margin-left: auto;
	font-size: 36px;
	background-color: #424d58;
	border: 1px solid #f8f8ff;
	padding: 2%;
	display: block;
	text-align: center;
	transform: translateY(-50%);

	.StripeCheckout {
		background: #778898 !important;
		text-shadow: none !important;
		transition: 0.5s ease !important;

		&:hover {
			background: #95a2ac !important;
		}

		span {
			background: #778898 !important;
			box-shadow: unset !important;
			color: #f8f8ff !important;
			transition: 0.5s ease !important;
			&:hover {
				background: #95a2ac !important;
			}
		}
	}
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1.5rem;
	}
`;

export const WarningContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	font-size: 24px;
	color: #912929;
	margin-right: auto;
	transform: translate(15%, 50%);
	@media only screen and (min-width: 1024px) and (max-height: 768px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 1rem;
	}
	@media only screen and (min-width: 1112px) and (max-height: 834px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		font-size: 0.8rem;
		transform: translate(-0.5%, 50%);
	}
`;
