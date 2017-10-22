'use strict';

module.exports = (req, res) => {  

    req.session.destroy();
    console.log('logout');
    res.send({ success: true });
};