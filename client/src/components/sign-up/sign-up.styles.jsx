import styled from "styled-components";

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	background-color: rgba(220, 220, 220, 0.3);
	text-align: center;
	padding: 10px;

	.sign-up-button {
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 10px;
	}

	span {
		font-size: 1rem;
	}
`;

export const SignUpTitle = styled.h2`
	margin: 10px 0;
	font-size: 2rem;
`;

export const SignUpTitleContainer = styled.div`
	background: #424d58;
	padding: 15px;
	color: #f8f8ff;
`;
