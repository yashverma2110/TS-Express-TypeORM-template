import { AnySchema } from "yup";

const validatePayload = (schema: AnySchema) => {
  return async (req: any, res:any, next:any) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;

      next();
    } catch (e: any) {
     res.status(400).json({success: false, error: {
       msg: e.message
     }})
    }
  };
};

export default validatePayload
