import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Talk = () => {
	return (
		<div className="flex mt-5 ">
			<Row>
				<Col sm={8}>
					<img
						src="https://blush.design/api/download?shareUri=hCJaN5bWPrdIGsPQ&c=Bottom_0%7E342a83-0.1%7E393f82-0.2%7E393f82_Hair_0%7E181658-0.1%7Eb58143-0.2%7E2c1b18_Skin_0%7E57331f-0.1%7E915b3c-0.2%7E915b3c_Top_0%7Ef2f2f2-0.1%7Eff4133-0.2%7Ef2f2f2&w=800&h=800&fm=png"
						width={'80%'}
					/>
				</Col>
				<Col sm={4} className="aboutCol">
					<p>LET'S TALK</p>
					<h1>
						Let's make something great together. We are trusted by over 5000+
						clients.
					</h1>
					<p>
						We Help ateasd Our ateasd Client ateasd to increase ateasd their
						website. Come join us, createyour ateasd ateasd ateasd ateasd
						business ateasd ateasd easier!
					</p>
					<Button variant="warning">Learn More!</Button>{' '}
				</Col>
			</Row>
		</div>
	);
};

export default Talk;
