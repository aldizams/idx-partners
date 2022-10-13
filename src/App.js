import logo from './logo.svg';
import './App.css';
import { About, Analyze, Footer, Header, Product, Talk } from './components';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<div className="grad">
				<Container fluid="sm">
					<Header />
					<About />
				</Container>
			</div>
			<Container fluid="sm">
				<Product />
			</Container>
			<div className="bg-analyze">
				<Container fluid="sm">
					<Analyze />
				</Container>
			</div>
			<Container fluid="sm">
				<Talk />
			</Container>
			<div className="footer">
				<Container fluid="sm">
					<Footer />
				</Container>
			</div>
		</div>
	);
}

export default App;
