import React from 'react';
import { Item, Inner, Container, Pane, Title, SubTitle, Image } from './styles';

export default function Jumbutron({ children, direction = 'row', ...restProps }) {
	return (
		<Item>
			<Inner direction={direction} {...restProps}>
					{ children }
			</Inner>
		</Item>
	);
};

Jumbutron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}> {children} </Container>
};

Jumbutron.Pane = function JumbotronPane({ children, ...restProps }) {
	return <Pane {...restProps}> {children} </Pane>
};

Jumbutron.Title = function JumbotronTitle({ children, ...restProps }) {
	return <Title {...restProps}> {children} </Title>
};

Jumbutron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}> {children} </SubTitle>
};

Jumbutron.Image = function JumbotronImage({ ...restProps }) {
	return <Image {...restProps} />
};