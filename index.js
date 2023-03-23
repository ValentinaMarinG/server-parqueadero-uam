const EXPRESS = require("express");

const APP = EXPRESS();
const PORT = 5000;

APP.listen(PORT, () => 
    console.log(`Connect in the port ${PORT}`)
);