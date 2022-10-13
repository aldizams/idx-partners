import React from 'react';
import CardProduct from './card';

const Product = () => {
	let detail = [
		{
			id: 1,
			title: 'SEO Services',
			about:
				'SEO Services is our service to help you create a SEO to improve your website',
			button: 'warning',
		},
		{
			id: 2,
			title: 'WEB Design',
			about:
				'Web Design is our service that help you to create a design for your website',
			button: 'danger',
		},
		{
			id: 3,
			title: 'Social Engagement',
			about:
				'Social Engagement is is our service that help you to engage your social medias',
			button: 'primary',
		},
		{
			id: 4,
			title: 'Content Marketing',
			about:
				'Content Marketing is our service that help you to create a content for your market',
			button: 'info',
		},
	];
	return (
		<div className="mt-5 mb-5">
			<p>What We Do?</p>
			<h3>The service we offer is specifically designed to meet your needs</h3>
			<div className="cards mt-4">
				{detail.map((item) => (
					<CardProduct
						key={item.id}
						title={item.title}
						about={item.about}
						button={item.button}
					/>
				))}
			</div>
		</div>
	);
};

export default Product;
