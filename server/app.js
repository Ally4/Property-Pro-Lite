/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';

import bodyParser from 'body-parser';

import router from './routers/routers';

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/', router);

const port = process.env.PORT || 1000;

app.listen(port, () => { console.log(`app is listening on ${port}...`); });

export default app;
