import express from 'express' 

import { candidateRoute } from '../controllers/candidate/candidate.router';

 const apiRouter = express.Router();

apiRouter.use('/api',candidateRoute)


module.exports = apiRouter