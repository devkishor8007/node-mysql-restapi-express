const dbConfig = require('../db_config');
const express = require('express');
const router = express();

// get all the user
router.get('/user', (req, res) => {
    dbConfig.query('SELECT * FROM users', (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).send(result);
    });
});

// get only one user through id
router.get('/user/:id', (req, res) => {
    var id = req.params.id;
    dbConfig.query('SELECT * FROM users WHERE id =?', [id], (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });
});

// create a new user
router.post('/user', (req, res) => {
    var { name, description, age } = req.body;
    var Insert = { name: name, description: description, age: age };
    var sql = `INSERT INTO Users set ?`;
    dbConfig.query(sql, Insert, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).send("Successfully Added");
    })
})

// edit a user
router.put('/user/:id', (req, res) => {
    var { name, description, age } = req.body;
    var Update = { name: name, description: description, age: age };
    var sql = `UPDATE Users set ? where id = ${req.params.id}`;
    dbConfig.query(sql, Update, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Update successfully');
    })
})

// delete a user
router.delete('/user/:id', (req, res) => {
    var id = req.params.id;
    dbConfig.query('DELETE FROM users WHERE id =?', [id], (err, result) => {
        if (err) throw err;
        res.send("Delete Successfully");
    });
});


module.exports = router;