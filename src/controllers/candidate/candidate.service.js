import { User, TestScore } from '../../models'
import { responseCode } from '../../config/response'
const { QueryTypes, Op } = require("sequelize");
import { responseObject } from '../../helpers/index'
import { sequelize } from "../../config/sequelize";

export default {

    async register(req, res) {
        try {

            const { name, email, address } = req.body

            if (!name && !email) {
                return responseObject(req, res, {}, responseCode.OK, true, "name and email is required")
            }
            const CheckEmail = await User.findOne({ where: { email: email } })
            if (CheckEmail) {
                return responseObject(req, res, {}, responseCode.OK, true, "Email shoud be unique.")
            }
            await User.create(req.body).then(candidate => {
                if (candidate) {
                    return responseObject(req, res, candidate, responseCode.OK, true, "Candiate register successfully.")
                }
            })

        } catch (err) {
            return responseObject(req, res, {}, responseCode.INTERNAL_SERVER_ERROR, false, "Something went Wrong")

        }

    },

    async assignScore(req, res) {
        try {

            const { userId, firstRoundMask, secondRoundMask, thirdRoundMask } = req.body

            if (!userId && !firstRoundMask && !secondRoundMask && !thirdRoundMask) {
                return responseObject(req, res, {}, responseCode.OK, true, "All field is required")
            }
            let checkUser = await TestScore.findOne({ where: { userId: userId } })
            if (checkUser) {
                return responseObject(req, res, {}, responseCode.OK, true, "Candiate have already assign mask.")

            }
            await TestScore.create(req.body).then(candidate => {
                if (candidate) {
                    return responseObject(req, res, candidate, responseCode.OK, true, "Candiate assign mask successfully.")
                }
            })

        } catch (err) {
            console.log("====", err)
            return responseObject(req, res, {}, responseCode.INTERNAL_SERVER_ERROR, false, "Something went Wrong")

        }

    },
    async highestScore(req, res) {
        try {

            const HigestScore = await sequelize.query(
                `SELECT
               userId , Users.email, Users.name,Users.address,firstRoundMask, secondRoundMask, thirdRoundMask,
              firstRoundMask + secondRoundMask + thirdRoundMask AS "Total"
              FROM TestScores
              LEFT JOIN Users ON Users.id = userId
              ORDER BY Total DESC`,
                {
                    raw: true,
                    nest: true,
                    type: QueryTypes.SELECT,
                }
            );
            if (HigestScore.length > 0) {
                return responseObject(req, res, HigestScore[0], responseCode.INTERNAL_SERVER_ERROR, false, "get higest mask of student")
            } else {
                return responseObject(req, res, {}, responseCode.INTERNAL_SERVER_ERROR, false, "data not found")

            }

        } catch (err) {
            console.log("=====", err)
            return responseObject(req, res, {}, responseCode.INTERNAL_SERVER_ERROR, false, "Something went Wrong")

        }

    },

    async avgScore(req, res) {
        try {

            const avgScore = await sequelize.query(
                `SELECT AVG(firstRoundMask) as "firstRoundMask", AVG(secondRoundMask) as "secondRoundMask" ,AVG(thirdRoundMask) as "thirdRoundMask"
                FROM TestScores`,
                {
                    raw: true,
                    nest: true,
                    plain:true,
                    type: QueryTypes.SELECT,
                }
            );
            if (avgScore) {
                return responseObject(req, res, avgScore, responseCode.INTERNAL_SERVER_ERROR, false, "get avarage of per round")
            } else {
                return responseObject(req, res, {}, responseCode.INTERNAL_SERVER_ERROR, false, "data not found")

            }

        } catch (err) {
            console.log("=====", err)
            return responseObject(req, res, {}, responseCode.INTERNAL_SERVER_ERROR, false, "Something went Wrong")

        }

    }
}