import express from 'express';

const app = express();

const port = 8080;
app.get('/welcome', (req, res) => {
	const data = { 
		challengeNumber: 1
	}
	res.json(data);
});

app.listen(port, () => {
	console.log('App listening at http://localhost%s', port);
});

export default app;