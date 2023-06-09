import express from 'express';
import * as routers from './routes/index.routes'

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send());

app.use(routers.ProductRouter)
app.use(routers.UserRouter)

export default app;