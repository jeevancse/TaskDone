import candidateService from './candidate.service'
import { responseObject } from '../../helpers/index'
import { responseCode } from '../../config/response'



export default {
    async register(req, res) {
        console.log("here")
        await candidateService.register(req, res).then(candidate =>{
            if(candidate) {
                return candidate
            } 
        }).catch(err => {
            return responseObject(req, res, {} , responseCode.INTERNAL_SERVER_ERROR, false , "Something went Wrong")
        })
    },

    async assignScore(req, res) {
        console.log("here")
        await candidateService.assignScore(req, res).then(candidate =>{
            if(candidate) {
                return candidate
            } 
        }).catch(err => {
            return responseObject(req, res, {} , responseCode.INTERNAL_SERVER_ERROR, false , "Something went Wrong")
        })
    },

    async highestScore(req, res) {
        console.log("here")
        await candidateService.highestScore(req, res).then(candidate =>{
            if(candidate) {
                return candidate
            } 
        }).catch(err => {
            return responseObject(req, res, {} , responseCode.INTERNAL_SERVER_ERROR, false , "Something went Wrong")
        })
    },
    async avgScore(req, res) {
        console.log("here")
        await candidateService.avgScore(req, res).then(candidate =>{
            if(candidate) {
                return candidate
            } 
        }).catch(err => {
            return responseObject(req, res, {} , responseCode.INTERNAL_SERVER_ERROR, false , "Something went Wrong")
        })
    }
}