import express from 'express';
import client from '../database';

let router = express.Router();

router.post('/', (req, res) => {
  console.log("route for sendform is working")
  console.log(req.body)
  const questions = req.body.questions;
  const options = req.body.options;

  const query = {
    text: 'INSERT INTO feedback_form(id, question, option) VALUES($1, $2, $3)',
    values: [1, questions[0].name, options[0]]
  }

  // promise
  client.query(query)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack))

});

export default router;
