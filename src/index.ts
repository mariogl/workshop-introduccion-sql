import chalk from "chalk";
import { environment } from "./environment/loadEnvironments.js";
import app from "./server/index.js";

const { port } = environment;

try {
  app.listen(port, () => {
    console.log(chalk.blue(`Server listening on http://localhost:${port}`));
  });

  // Connect to database
  // and log success message to console  (you can use chalk)
} catch (error: unknown) {
  // Log error message to console  (you can use chalk)
}
