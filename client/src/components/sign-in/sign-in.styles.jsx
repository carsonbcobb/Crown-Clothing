import styled from "styled-components";

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
	background-color: rgba(220, 220, 220, 0.3);
	text-align: center;
	padding: 10px;

	.sign-in-button {
		padding: 0;
	}
	span {
		font-size: 1rem;
	}
`;

export const ButtonsBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SignInTitle = styled.h2`
	margin: 10px 0;
	font-size: 2rem;
`;

export const SignInTitleContainer = styled.div`
	background: #424d58;
	padding: 15px;
	color: #f8f8ff;
`;
