import server from "./server.js";
import colors from "colors";
import "dotenv/config";

let port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(colors.green(`Server listening from port ${port}`));
});
