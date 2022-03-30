import asyncHandler from "express-async-handler"
import Exercise from "../../models/exerciseModel.js"

// @desc   Add new exercise
// @route  POST /api/exercise
// @access Private
export const addNewExercise = asyncHandler(async(req, res) =>{
  const {name, times, images} = req.body
  const exercise = await Exercise.create({
      name,
      times,
      images,
  })
  res.json(exercise)
})
 