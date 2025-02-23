import { authService } from "./auth.service";

export const AuthController = {
   async register(req, res) {
      try {
         const { username, email, password } = req.body;
         console.log(username, email, password);
      } catch (error) {
         console.error("Unexpected error:", error.message);

         res.status(500).json({ error: error.message });
      }
   },
};
