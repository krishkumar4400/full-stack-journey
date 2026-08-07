const followModel = require("../Model/follow.model.js");
const userModel = require("../Model/User.Model.js");

async function followUser(req, res) {
  try {
    const { userId } = req.params;

    if (userId === req.userId) {
      return res.status(403).json({
        message: "You cannot follow yourself",
        success: false,
      });
    }

    const isFolloweeExists = await userModel.findById(userId);
    if (!isFolloweeExists) {
      return res.status(404).json({
        message: "User you are trying to follow does not exists",
        success: false,
      });
    }

    const isAlreadyFollowing = await followModel.findOne({
      follower: req.userId,
      followee: userId,
    });

    if (isAlreadyFollowing) {
      return res.status(403).json({
        message: `You are already a follower of ${userId}`,
        success: false,
      });
    }

    const result = await followModel.create({
      follower: req.userId,
      followee: userId,
    });

    return res.status(200).json({
      message: `You are now following ${userId}`,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function unFollowUser(req, res) {
  try {
    const { userId } = req.params;

    if (userId === req.userId) {
      return res.status(403).json({
        message: "You cannot unfollow yourself",
        success: false,
      });
    }

    const isFolloweeExists = await userModel.findById(userId);
    if (!isFolloweeExists) {
      return res.status(404).json({
        message: "User you are trying to unfollow does not exists",
        success: false,
      });
    }

    const isFollowing = await followModel.findOne({
      follower: req.userId,
      followee: userId,
    });

    if (!isFollowing) {
      return res.status(404).json({
        message: `you are not following ${userId}`,
        success: false,
      });
    }

    const deleteResponse = await followModel.findByIdAndDelete(isFollowing._id);
    console.log(deleteResponse);

    if (!deleteResponse) {
      return res.status(400).json({
        message: "Something went wrong while unfollowing a user",
        success: false,
      });
    }

    return res.status(200).json({
      message: `You have unfollowed ${userId}`,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

module.exports = {
  followUser,
  unFollowUser,
};
