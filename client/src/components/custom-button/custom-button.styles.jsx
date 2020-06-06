import styled, { css } from "styled-components";

const buttonStyles = css`
	background-color: #424d58;
	color: white;
	border: none;
	transition: 0.5s ease;

	&:hover {
		background-color: #778899;
		color: #f8f8ff;
	}
`;

const invertedButtonStyles = css`
	background-color: #f8f8ff;
	color: #424d58;
	border: 1px solid #424d58;
	transition: 0.5s ease;

	&:hover {
		background-color: #424d58;
		color: #f8f8ff;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #c15e5e;
	color: #f8f8ff;
	transition: 0.5s ease;
	border: none;

	&:hover {
		background-color: #d08686;
		border: none;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`;
