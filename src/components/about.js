import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
	return (
		<div className="flex mt-5 ">
			<Row>
				<Col sm={8}>
					<img
						src="https://blush.design/api/download?shareUri=D7aRWBvPiLeJAaUP&c=Bottom_0%7E2b44ff-0.1%7E393f82-0.2%7E2b44ff-0.3%7E2b44ff_Hair_0%7Eb58143-0.1%7Eb58143-0.2%7Eb58143-0.3%7E2c1b18_Skin_0%7Edcae92-0.1%7Edcae92-0.2%7Edcae92-0.3%7Eb28b67_Top_0%7Ea8e5ba-0.1%7Eff4133-0.2%7Ef2f2f2-0.3%7Ea8e5ba&w=800&h=800&fm=png"
						width={'80%'}
					/>
				</Col>
				<Col sm={4} className="aboutCol">
					<h1>Grow Your Business Solutions</h1>
					<p>
						We Help Our Client to increase their website. Come join us,
						createasdasdasd your business easier!
					</p>
					<Button variant="warning">Learn More</Button>{' '}
				</Col>
			</Row>
		</div>
	);
};

export default About;
