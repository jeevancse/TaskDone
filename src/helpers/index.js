
import { responseCode } from '../config/response'

export const responseObject = (
    req,
    res,
    data,
    code = responseCode.OK,
    success = true,
    message = ""
  ) =>
    res.status(code).send({
      code,
      message: message,
      success: success,
      data,
    });