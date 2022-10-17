import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Analyze = () => {
	return (
		<div className="flex mt-5 ">
			<Row>
				<Col sm={4} className="aboutCol">
					<p>ANALYZE NOW</p>
					<h2>
						Wonder how much faster your website can go? Easily check your SEO
						Score now!
					</h2>
					<p>
						We Help Our Client to increase their website increase their website
						increase their website increase their website increase their
						website. Come join us, createasdasdasd your youryour youryour
						yourbusiness easier!
					</p>
					<Button variant="warning">Learn More</Button>{' '}
				</Col>
				<Col sm={8}>
					<img
						src="https://blush.design/api/download?shareUri=UremU2-GU4FCUDCH&c=Bottom_0%7E342a83-0.1%7E393f82-0.2%7E342a83_Hair_0%7Eb58143-0.1%7Ee8e1e1-0.2%7E181658_Skin_0%7E57331f-0.1%7Ed4a181-0.2%7E57331f_Top_0%7Effa434-0.1%7Ef2f2f2-0.2%7Effa434&w=800&h=800&fm=png"
						width={'80%'}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default Analyze;
