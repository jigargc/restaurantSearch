const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(9090, () => {
    console.log("Server Started At http://localhost:9090/");
})
