import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<>
			<div
				className="footer pt-5 mt-5"
				style={{
					backgroundColor: '#343F51',
					color: 'white',
				}}
			>
				<Row className="pb-5">
					<Col sm={5}>
						<h2 style={{ textAlign: 'left', color: 'white' }}>
							Join our community by using our services and grow your business
						</h2>
					</Col>
					<Col sm={5}></Col>
					<Col sm={2} className="aboutCol">
						<Button variant="warning">Warning</Button>{' '}
					</Col>
				</Row>
				<Row className="pb-5 pt-5" style={{ textAlign: 'left' }}>
					<Col>
						<Row>
							<h5>Sandbox</h5>
							<p>2018 Sandbox</p>
							<p>All right reserved</p>
						</Row>
					</Col>
					<Col>
						<Row>
							<h5>Out In Touch</h5>
							<p>asdasd</p>
							<p>asdasd</p>
							<p>asdasd</p>
						</Row>
					</Col>
					<Col>
						<Row>
							<h5>Learn More</h5>
							<p>asdasd</p>
							<p>asdasd</p>
							<p>asdasd</p>
						</Row>
					</Col>
					<Col>
						<Row>
							<h5>Out Newspaper</h5>
							<p>asdasd</p>
							<p>asdasd</p>
							<p>asdasd</p>
						</Row>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Footer;
