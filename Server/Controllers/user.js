const express = require("express");
const router = express.Router();
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const crypto = require("crypto");

const multer = require("multer");
const path = require("path");

const User = require("../Modals/User.modal");
const Token = require("../Modals/token.modal");
const { response } = require("express");

const client = new OAuth2Client(
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com"
);

//sign up method
router.post("/createuser", async (req, res) => {
  try {
    const user = await User.findOne({ Username: req.body.Username });

    if (user) {
      res.status(400).send({ msg: "user already exist!" });
    } else {
      console.log(req.body);

      req.body.Password = Bcrypt.hashSync(req.body.Password, 10);

      const user = new User({
        Username: req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Website: req.body.Website,
        Bio: req.body.Bio,
      });

      user.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          //generate token
          var token = new Token({
            _userId: user._id,
            token: crypto.randomBytes(16).toString("hex"),
          });
          token.save(function (err, data) {
            if (err) {
              console.log(err);
            } else {
              res.send(data);
            }
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//token verify

router.get("/auth/token/verify/:token", async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.params.token });

    if (token) {
      // return res.send(token);
      User.findOne({ _id: token._userId }, function (err, user) {
        if (err) {
          return res.send({ msg: "user doesn't exist", err });
        } else {
          user.cinform = true;
          user.save((error) => {
            if (error) {
              console.log("error");
            } else {
              return res.send({ msg: "user verify", user });
            }
          });
        }
      });
    }
  } catch (error) {
    return res.send(error);
  }
});

//signin method
router.post("/users/login", async (req, res) => {
  var email = req.body.Email;
  var password = req.body.Password;
  var username = req.body.Username;

  var data;
  try {
    if (email && password) {
      data = {
        Email: email,
      };
    } else if (username && password) {
      data = {
        Username: username,
      };
      // console.log(data);
    } else {
      res.json({
        status: 500,
      });
    }
    User.findOne(data, function (err, user) {
      // console.log(user);
      if (err) {
        return res.status(500).send({ msg: err.message });
      }

      // user is not found in database i.e. user is not registered yet.
      else if (!user) {
        return res.status(401).send({
          msg:
            "The email address " +
            req.body.email +
            " is not associated with any account. please check and try again!",
        });
      }
      // comapre user's password if user is find in above step
      else if (!Bcrypt.compareSync(req.body.Password, user.Password)) {
        return res.status(401).send({ msg: "Wrong Password!" });
      }

      // user successfully logged in
      else {
        Token.findOne({ _userId: user.id }, function (err, token) {
          if (err) {
            return res.send(err);
          } else {
            return res.send({
              msg: "User successfully logged in.",
              data: token,
            });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//get user

router.get("/get/users/:id", async (req, res) => {
  try {
    User.findById({ _id: req.params.id }, function (error, user) {
      if (error) {
        console.log(error);
      } else {
        res.send(user);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads/UserProfile");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });

//Dashboard detailes
router.post(
  "/edit/dashboard/add/:userid",
  upload.single("ProfileImage"),
  async (req, res) => {
    User.findById({ _id: req.params.userid }, function (error, user) {
      user.DisplayName = req.body.DisplayName;
      user.ProfileImage = req.file.path
        .replace("..\\public", "")
        .replace("../public", "")
        .replace("..public", "");

      user.Firstname = req.body.Firstname;
      user.Lastname = req.body.Lastname;
      user.Email = req.body.Email;
      user.Phone = req.body.Phone;
      user.Website = req.body.Website;
      user.Username = user.Username;
      user.Address = req.body.Address;
      user.Password = req.body.Password;
      user.Bio = req.body.Bio;

      user.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("user profile changed");
          res.send(user);
        }
      });
    });
  }
);

//get user details by token
router.get("/get/user/:token", async (req, res) => {
  try {
    Token.findOne({ token: req.params.token }, function (err, token) {
      if (err) {
        return res.send(err);
      } else {
        // return res.send(token);
        User.findOne({ _id: token._userId }, function (err, user) {
          if (err) {
            return res.send({ msg: "user doesn't exist", err });
          } else {
            user.cinform = true;
            user.save((error) => {
              if (error) {
                console.log("error");
              } else {
                return res.send();
              }
            });
          }
        });
      }
    });
  } catch (error) {
    return res.send(error);
  }
});

//react goggle login
router.post("/login/gogglesignin", async (req, res) => {
  try {
    const tokenId = req.body.tokenId;

    const response = await client.verifyIdToken({
      idToken: tokenId,
      audience:
        "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com",
    });
    if (response) {
      const { email_verified, email, name } = response.payload;
      console.log(email);

      if (email_verified) {
        User.findOne({ Email: email }, function (err, user) {
          if (err) {
            return res.send({ err });
          } else if (user) {
            console.log(user);

            var token = new Token({
              _userId: user._id,
              token: crypto.randomBytes(16).toString("hex"),
            });
            token.save(function (err, token) {
              if (err) {
                console.log(err);
              } else {
                res.send(token);
              }
            });
          } else {
            const newUser = new User({
              Username: name,
              Email: email,
            });
            newUser.save((err, user) => {
              if (err) {
                return res.send(err);
              }
              var token = new Token({
                _userId: user._id,
                token: crypto.randomBytes(16).toString("hex"),
              });
              token.save(function (err, token) {
                if (err) {
                  console.log(err);
                } else {
                  res.send(token);
                }
              });
              return res.send(user);
            });
          }
        });
      }
    } else {
      return res.send({ msg: "There is some error!" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
