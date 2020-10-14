import React from 'react';
import faqsData from '../fixtures/faqs.json';
import { Accordion, SendEmail } from '../components';

export default function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Question</Accordion.Title>
			{faqsData.map((item) => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}

			<SendEmail>
				<SendEmail.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</SendEmail.Text>
				<SendEmail.Input placeholder="Email address" />
				<SendEmail.Button>Get Started</SendEmail.Button>
			</SendEmail>
		</Accordion>
	);
}
