import express, { Router } from 'express'
import  candidateRouter from './candidate.controller'


export const candidateRoute = express.Router();

candidateRoute.post('/candidate-register', candidateRouter.register)
candidateRoute.post('/assign-score', candidateRouter.assignScore)
candidateRoute.get('/get', candidateRouter.highestScore)
candidateRoute.get('/avg', candidateRouter.avgScore)
