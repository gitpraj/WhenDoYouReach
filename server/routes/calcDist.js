const express = require('express')
const rest = require('rest')
const curl = require('curl')
// import client from '../database')

let router = express.Router();

router.post('/', (req, res) => {
  console.log("route for calcDist is working")
  // console.log(req.body)

  const {destAddr, lat, longt} = req.body

  console.log("dest Addr: " + destAddr);
  console.log("lat: " + lat);
  console.log("longt " + longt);

  var resUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + longt + "&key=AIzaSyAUcX2lFXhOwFGiIDJx48ALhfZ2ax1wJ1Q";

  var options = { url: resUrl};
  var errors = {}
  curl.getJSON(resUrl, function(err, response, data) {
      // var element = JSON.parse(body);
      if (data) {
        if (data.results[0]) {
          var srcAddr = data.results[0].formatted_address
          if (srcAddr) {
            console.log("srcAddr: " + srcAddr);
            //https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=bicycling&language=fr-FR&key=YOUR_API_KEY
            var encodeRes1 = encodeURIComponent(srcAddr)
            var encodeRes2 = encodeURIComponent(destAddr)
            var resUrl2 = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="
              + encodeRes1 + "&destinations=" + encodeRes2 + "&mode=bicycling&key=AIzaSyAUcX2lFXhOwFGiIDJx48ALhfZ2ax1wJ1Q";
            curl.getJSON(resUrl2, function(err2, response2, data2) {
                if (data2.rows[0].elements[0].distance) {
                  console.log("bicycle")
                  console.log("distance " + JSON.stringify(data2.rows[0].elements[0].distance.text));
                  console.log("duration: " + JSON.stringify(data2.rows[0].elements[0].duration.text));
                  var resUrl3 = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="
                    + encodeRes1 + "&destinations=" + encodeRes2 + "&mode=driving &key=AIzaSyAUcX2lFXhOwFGiIDJx48ALhfZ2ax1wJ1Q";
                  curl.getJSON(resUrl3, function(err3, response3, data3) {
                      if (data3) {
                        console.log("driving")
                        console.log("distance " + JSON.stringify(data3.rows[0].elements[0].distance.text));
                        console.log("duration: " + JSON.stringify(data3.rows[0].elements[0].duration.text));
                        var resUrl4 = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="
                          + encodeRes1 + "&destinations=" + encodeRes2 + "&mode=walking&key=AIzaSyAUcX2lFXhOwFGiIDJx48ALhfZ2ax1wJ1Q";
                        curl.getJSON(resUrl4, function(err4, response4, data4) {
                            if (data4) {
                              console.log("walking")
                              console.log("distance " + JSON.stringify(data4.rows[0].elements[0].distance.text));
                              console.log("duration: " + JSON.stringify(data4.rows[0].elements[0].duration.text));

                              var resUrl5 = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="
                                + encodeRes1 + "&destinations=" + encodeRes2 + "&mode=transit&transit_mode=train&key=AIzaSyAUcX2lFXhOwFGiIDJx48ALhfZ2ax1wJ1Q";
                              curl.getJSON(resUrl5, function(err5, response5, data5) {
                                  if (data5) {
                                    console.log("train")
                                    console.log("distance " + JSON.stringify(data5.rows[0].elements[0].distance.text));
                                    console.log("duration: " + JSON.stringify(data5.rows[0].elements[0].duration.text));

                                    res.json({
                                      cycle: {
                                        distance: data2.rows[0].elements[0].distance.text,
                                        duration: data2.rows[0].elements[0].duration.text
                                      },
                                      car: {
                                        distance: data3.rows[0].elements[0].distance.text,
                                        duration: data3.rows[0].elements[0].duration.text
                                      },
                                      train: {
                                        distance: data5.rows[0].elements[0].distance.text,
                                        duration: data5.rows[0].elements[0].duration.text
                                      },
                                      walk: {
                                        distance: data4.rows[0].elements[0].distance.text,
                                        duration: data4.rows[0].elements[0].duration.text
                                      }
                                    })
                                  } else {
                                    console.log("distance matrix api gone worong    4")
                                    res.status(400).json({errors: null});
                                  }

                              })
                            } else {
                              console.log("distance matrix api gone worong    3")
                              res.status(400).json({errors: null});
                            }

                        })
                      } else {
                        console.log("distance matrix api gone worong     2")
                        res.status(400).json({errors: null});
                      }

                  })
                } else {
                  console.log("distance matrix api gone worong   1")
                  res.status(400).json({errors: null});
                }

            })

          } else {
            console.log("error in user location")
            res.status(400).json({errors: null});
          }
        }
      } else {
          console.log("error error")
      }
      var srcAddr = data.results[0].formatted_address

  })

  // res.json({train: 50})
});

module.exports = router;
