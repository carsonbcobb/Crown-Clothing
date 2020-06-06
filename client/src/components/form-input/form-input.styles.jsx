import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
	top: -35px;
	font-size: 1.3rem;
	color: black;
`;

export const GroupContainer = styled.div`
	position: relative;
	margin: 45px 0;

	input[type="password"] {
		letter-spacing: 0.3em;
	}
`;

export const FormInputContainer = styled.input`
	background: none;
	background-color: #424d58;
	color: #f8f8ff;
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	margin: 25px 0;
	outline: none;

	&:focus {
		outline: none;
	}
	&:focus ~ label {
		${shrinkLabelStyles}
	}
`;

export const FormInputLabel = styled.label`
	color: #f8f8ff;
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	&.shrink {
		${shrinkLabelStyles}
	}
`;
