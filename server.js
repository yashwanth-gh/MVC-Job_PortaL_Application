import server from "./index.js";
server.listen(3400, (err) => {
    if (err) console.log("ERROR :: server.js :: Server listen Error")

    console.log("Server is live on PORT --> 3400");
});
