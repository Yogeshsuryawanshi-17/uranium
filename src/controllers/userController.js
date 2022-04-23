const jwt = require("jsonwebtoken");
const { baseModelName } = require("../models/userModel");
const userModel = require("../models/userModel");



//=====> Create User

const createUser = async function (abcd, xyz) {

  try {

    let data = abcd.body;
 
    if (Object.keys(data).length != 0) {

      let savedData = await userModel.create(data);
      xyz.status(201).send({ status: true, msg: "Data Created and saved into DB", savedData });
    }
    else {
      xyz.status(400).send({ msg: "BAD REQUEST" })
    }
  }
  catch (baderror) {
    xyz.status(500).send({ msg: "check onece again it throws error", error: baderror.message })
  }

};



//====> loginUser

const loginUser = async function (req, res) {

  try {

    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });


    if (!user)
      return res.status(401).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, data: token });

  }

  catch (baderror) {
    res.status(500).send({ msg: "check once it throws erroe", error: baderror.message })
  }
};


//====> getUserData 


const getUserData = async function (req, res) {
  // let token = req.headers["x-Auth-token"];

  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // let decodedToken = jwt.verify(token, "functionup-thorium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};







//=======> UpdateUser Data

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: true, data: updatedUser });
};











///========>PostMessage 


const postMessage = async function (req, res) {


  let user = await userModel.findById(req.params.userId)
  if (!user) return res.status(401).send({ status: false, msg: 'No such user exists' })

  let message = req.body.message
  let updatedPosts = user.posts
  updatedPosts.push(message)

  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true, upsert: true })

  return res.status(201).send({ status: true, data: updatedUser })
}









module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
