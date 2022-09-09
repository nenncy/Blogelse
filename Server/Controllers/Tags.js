const Tag = require("../Modals/Tag.modal");

const router = require("express").Router();

router.post("/create/tag", async (req, res) => {
  try {
    const tag = await Tag.findOne({ tagname: req.body.tagname });
    if (tag) {
      return res.status(400).send("already exist");
    } else {
      const newtag = await Tag({
        tagname: req.body.tagname,
      });
      newtag.save((error, data) => {
        if (error) {
          return res.status(300).send("already exist");
        } else {
          return res.status(200).send(data);
        }
      });
    }
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

router.get("/get/allltags", async (req, res) => {
  try {
    const tags = await Tag.find();

    if (tags) {
      return res.status(200).send(tags);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
