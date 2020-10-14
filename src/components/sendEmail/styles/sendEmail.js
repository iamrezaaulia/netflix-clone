import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	margin-top: 32px;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Text = styled.p`
	padding-bottom: 10px;
	color: #ffffff;
	font-size: 22px;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 18px;
		line-height: 22px;
	}
`;

export const Input = styled.input`
	max-width: 550px;
	width: 100%;
	border: 0;
	padding: 10px;
	height: 70px;
	box-sizing: border-box;

	@media (max-width: 1000px) {
		width: 100%;
		height: 50px;
	}
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 300px;
	width: 100%;
	height: 70px;
	background: #e50914;
	color: #ffffff;
	text-transform: uppercase;
	padding: 0 32px;
	font-size: 24px;
	border: 0;
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		background: #f40612;
	}

	@media (max-width: 1000px) {
		height: 50px;
		margin-top: 20px;
		font-size: 20px;
	}

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 24px;

		@media (max-width: 1000px) {
			width: 18px;
		}
	}
`;
