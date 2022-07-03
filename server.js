const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const rappers = require('./rappers.js');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
    const rapperName = req.params.name.toLowerCase();
    if(rappers[rapperName]){
        res.json(rappers[rapperName]);
    }else
    res.json(rappers['unknown']);

});

app.listen(PORT, (_) =>
    console.log(`We are Runnig Stuf On : ----> ${PORT} Go go go catch it!   `)
);
