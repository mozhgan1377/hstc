import appConfig from "@config/app.config.js";
import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
   if (appConfig.unprotectedRoutes.includes(req.path)) return next();

   const token = req.headers["authorization"]?.split(" ")[1];

   if (!token)
      return res
         .status(401)
         .json({ message: "UNAUTHORIZED: No token provided" });

   const jwtSecret = process.env.JWT_SECRET;

   try {
      const decoded = jwt.verify(token, jwtSecret);

      req.user = {
         userId: decoded.userId,
         username: decoded.username,
         email: decoded.email,
      };
      next();
   } catch (error) {
      return res.status(401).json({ message: "UNAUTHORIZED: Invalid token" });
   }
};
