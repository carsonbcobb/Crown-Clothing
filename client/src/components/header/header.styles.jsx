import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		font-size: 0.5rem;
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 0.3rem;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 0.85%;
	background-color: rgba(220, 220, 220, 0.3);
	margin-left: 10px;
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		padding: 2.5%;
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		padding: 2.5%;
	}
	@media only screen and (max-width: 320px) and (max-height: 568px) and (-webkit-device-pixel-ratio: 2) {
		padding: 2.5%;
	}
	@media (min-width: 1020px) and (min-height: 1080px) {
		padding: 0.5%;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 1.3rem;
	color: #f8f8ff;
	transform: translateY(10%);
	svg {
		path {
			fill: #f8f8ff !important;
		}
	}
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	color: #f8f8ff;
	transition: 0.75s ease;
	&:hover {
		color: #424d58;
	}
	@media only screen and (min-width: 1366px) and (max-height: 1024px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 2rem;
	}
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		font-size: 1rem;
		padding: 2px 2px;
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 1rem;
		padding: 2px 2px;
	}
	@media only screen and (max-width: 320px) and (max-height: 568px) and (-webkit-device-pixel-ratio: 2) {
		font-size: 1rem;
		padding: 5px 5px;
	}
	@media (min-width: 1920px) and (min-height: 1080px) {
		font-size: 2rem;
	}
`;

export const Title = styled.div`
	display: flex;
	margin-left: 25px;
	margin-right: auto;
	transform: translateY(-10%);
	a {
		text-decoration: none;
		cursor: pointer;
		color: #424d58;
	}
	@media (min-width: 800px) and (min-height: 600px) {
		width: 100%;
		transform: translateY(-50%);
	}
	@media only screen and (min-width: 1024px) and (max-height: 768px) and (-webkit-device-pixel-ratio: 2) {
		transform: translateY(-10%);
	}
	@media only screen and (min-width: 1366px) and (max-height: 1024px) and (-webkit-device-pixel-ratio: 2) {
		transform: translateY(-10%);
	}
	@media only screen and (min-width: 1112px) and (max-height: 834px) and (-webkit-device-pixel-ratio: 2) {
		transform: translateY(-10%);
	}
	@media only screen and (max-width: 414px) and (max-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		transform: translate(-20%, 10%);
		text-align: center;
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		transform: translate(-30%, 30%);
		text-align: center;
	}
	@media only screen and (max-width: 320px) and (max-height: 568px) and (-webkit-device-pixel-ratio: 2) {
		transform: translate(-30%, 20%);
		text-align: center;
	}
	@media (min-width: 1020px) and (min-height: 1080px) {
		font-size: 1.5rem;
		transform: translateY(-40%);
	}
`;
