import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardProduct = (props) => {
	return (
		<Card style={{ width: '18rem' }} className="card">
			<Card.Img variant="top" src={props.icon} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.about}</Card.Text>
				<Button variant={props.button}>Learn More</Button>
			</Card.Body>
		</Card>
	);
};

export default CardProduct;
