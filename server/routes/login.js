import express from 'express';
import client from '../database';

let router = express.Router();

router.post('/', (req, res) => {
  console.log("route for sendform is working")
  console.log(req.body)
  var email = req.body.email,
      password = req.body.password;

  if (email == "abc" && password == "abc") {
      //Success
      console.log("email: " + email);
      console.log("password: " + password);
      //Save the username when the user posts the set username form
        console.log("# email set to "+ req.body.email);
        req.session.email = req.body.email;
        req.session.save();
        console.log("# Session value set "+ req.session.email);
  } else {
      //Failure
      console.log("auth fail")
  }

});

//Return the session value when the client checks
router.get('/username', function(req,res){
  console.log("# Client email check "+ req.session.email);
  res.json({email: req.session.email})
});

export default router;
