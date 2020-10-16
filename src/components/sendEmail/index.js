import React from 'react';
import { Container, Text, Input, Button, Break } from './styles/sendEmail';

export default function SendEmail({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

SendEmail.Text = function SendEmailText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

SendEmail.Input = function SendEmailInput({ ...restProps }) {
	return <Input {...restProps} />;
};

SendEmail.Button = function SendEmailButton({ children, ...restProps }) {
	return (
		<Button {...restProps}>
			{children} <img src="/images/icons/chevron-right.png" alt="Get Started" />
		</Button>
	);
};

SendEmail.Break = function SendEmailBreak({ children, ...restProps }) {
	return <Break {...restProps}>{children}</Break>;
};
