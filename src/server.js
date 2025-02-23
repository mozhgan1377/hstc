import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
import ora from "ora";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

figlet("Express API", (err, data) => {
   if (err) {
      console.error(chalk.red("❌ Error generating ASCII logo"));
      return startServer();
   }

   console.log(chalk.blue(data));

   const spinner = ora({
      text: "🚀 Starting server...",
      color: "cyan",
   }).start();

   setTimeout(() => {
      spinner.succeed(
         chalk.green(`✅ Server started on http://localhost:${PORT}`)
      );

      console.log(
         boxen(chalk.yellow("API is ready to use!"), {
            padding: 1,
            margin: 1,
            borderStyle: "round",
            borderColor: "cyan",
         })
      );

      startServer();
   }, 2000);
});

function startServer() {
   app.listen(PORT, () => {
      console.log(
         chalk.green(`🚀 Server is running on http://localhost:${PORT}`)
      );
   });
}
