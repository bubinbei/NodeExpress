// @desc   Get user profile
// @route  Get /api/user/profile
// @access Private
export const getUserProfile = (req, res) =>{
  const user = {
    name: "Roma",
    age: 41
  }
  res.json(user)
}
 