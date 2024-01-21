import server from "./index.js";
import 'dotenv/config'
server.listen(process.env.PORT, (err) => {
    if (err) console.log("ERROR :: server.js :: Server listen Error")

    console.log("Server is live on PORT --> 3400");
});
