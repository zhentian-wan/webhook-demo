const {json} = require('micro');

module.exports = async (req) => {
    "use strict";
    const data = await json(req);
    console.log(data);
};