const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM log_book ORDER BY login_id;`;
    pool.query(queryText)
    .then ((result)=>{
        console.log(`SP DB working`, result);
        res.send(result.rows);
    })
    .catch((error)=> {
        console.log('Error in GET request', error);
        res.sendStatus(500);
    })
})

router.get('/get-events', async (req,res)=> {
    const events = await 
})

module.exports = router;