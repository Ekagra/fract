  
import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [college, setCollege] = useState('');
	const [icecream, setIcecream] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, age, college, icecream };

		axios
			.post(
				'https://sheet.best/api/sheets/29672e54-8817-4cbe-9e37-85f85f6199d2',
				objt
			)
			.then((response) => {
        //completed
				console.log(response);
			});
	};

	return (
		<Container fluid className="container">
			<Header as="h2" className="head">Ekagra's Survey</Header>
			<Form className="form">
				<Form.Field>
					<label className="label">Name</label>
          <br></br>
          
					<input className="field"
						placeholder="what's your name"
						onChange={(e) => setName(e.target.value)}
					/>

				</Form.Field>
        <br></br>
                    <br></br>
				<Form.Field>
					<label className="label">Age</label>
          <br></br>
					<input className="field"
						placeholder="how old are you"
						onChange={(e) => setAge(e.target.value)}
					/>
				</Form.Field>
        <br></br>
                    <br></br>
				<Form.Field>
					<label className="label">Your College</label>
          <br></br>
					<input className="field"
						placeholder="do you even college?"
						onChange={(e) => setCollege(e.target.value)}
					/>
				</Form.Field>
        <br></br>
                    <br></br>
				<Form.Field>
					<label className="label">Favorite Icecream</label>
          <br></br>

					<input className="field"
						placeholder="don't say vanilla"
						onChange={(e) => setIcecream(e.target.value)}
					/>
				</Form.Field>

				

        <br></br>
                    <br></br>

				<Button className="btn" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;