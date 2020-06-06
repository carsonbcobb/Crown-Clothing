import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 0.85%;
	background-color: rgba(220, 220, 220, 0.3);
	margin-left: 10px;

	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0;
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
	@media screen and (max-width: 800px) {
		width: 80%;
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
`;
