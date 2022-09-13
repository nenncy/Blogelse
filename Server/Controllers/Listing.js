const Listing = require("../Modals/listing.model");
const Plan = require("../Modals/Plan.modal");
const express = require("express");
const router = express.Router();

router.post("/addlisting/plans/:planid", async (req, res) => {
  try {
    const planid = await Plan.findOne({ _id: req.params.planid });
    //return res.send(planid);
    //console.log(planid._id);
    if (planid) {
      const listingid = await Listing.findOne({ title: req.body.title , planid: planid._id});
      if (listingid) {
        listingid.features = listingid.features.concat(req.body.features);
        listingid.tags=listingid.tags.concat(req.body.tags);
        listingid.save((error, data) => {
          if (error) {
            return res.status(400).send(error);
          } else {
            return res.status(200).send(data);
          }
        });
        //return res.status(400).send({ Errormsg: "already exist" });
      }

      const newListing = new Listing({
        title: req.body.title,
        planid: planid._id,
        content: req.body.content,
        slogan: req.body.slogan,
        categoryid: req.body.categoryid,
        locationid:req.body.locationid,
    
        price:req.body.price
      });

      newListing.tags=newListing.tags.concat(req.body.tags);
      console.log(newListing.tags);
      newListing.features = newListing.features.concat(req.body.features);

      newListing.save((error, data) => {
        if (error) {
          return res.status(400).send(error);
        } else {
          return res.status(200).send(data);
        }
      });
    }
  } catch (error) {
    return res.status(500).send("error occured");
  }
});

module.exports = router;
