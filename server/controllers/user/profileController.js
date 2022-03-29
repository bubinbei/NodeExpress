import asyncHandler from "express-async-handler"
import User from "../../models/userModel.js"

// @desc   Get user profile
// @route  Get /api/user/profile
// @access Private
export const getUserProfile = asyncHandler(async(req, res) =>{
  const user = await User.findById(req.user._id).select('-password')
  res.json(user)
})
 