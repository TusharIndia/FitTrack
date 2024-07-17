const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
require("dotenv").config();
const moment = require("moment");
const { ObjectId } = require('mongodb');

router.get('/total-calories', fetchuser, async (req, res) => {
  try {
    const field = 'date';
    const userId = req.user.id;
    let today = new Date();
    const todayDate = today.toISOString();
    const result = await Workout.aggregate([
      { $match: { user: new ObjectId(userId), date: { $lte: today } } },
      { $unwind: '$exercises' },
      { $group: {
          _id: '$user',
          totalCalories: { $sum: '$exercises.calorie_burn' }
        }
      }
    ]);

    const uniqueDates = await Workout.distinct(field, { 
      user: req.user.id,
      date: { $lte: today }
    });

    let uniqueCount = uniqueDates.length;
    let totalCalories = result.length ? result[0].totalCalories : 0;
    let averageCal = uniqueCount ? totalCalories / uniqueCount : 0; // Avoid division by zero
    res.json({ totalCalories,averageCal,uniqueCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/addworkout", fetchuser, async (req, res) => {
  try {
    let success = false;
    const { exercises, date } = req.body;
    let sear = date + "T00:00:00.000+00:00";
    const data = await Workout.findOne({ date: sear,user: req.user.id});
    if (data) {
      data.exercises.push(...exercises);
      await data.save();
      success = true;
      return res.status(200).json({ success });
    }
    const newWorkout = new Workout({
      exercises,
      user: req.user.id,
      date: date || new Date().toLocaleDateString("en-CA"),
    });
    const saved = await newWorkout.save();
    success = true;
    res.json({ success });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/searchbydt", fetchuser, async (req, res) => {
  try {
    let { date } = req.body;
    date = date + "T00:00:00.000+00:00";
    const data = await Workout.findOne({ date: date,user: req.user.id});
    if (!data) {
      return res.status(200).json({ excercise: [] });
    }
    res.json({ excercise: data.exercises });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/today", fetchuser, async (req, res) => {
  try {
    let date = new Date();
    date = date.toLocaleDateString("en-CA");
    const data = await Workout.findOne({ date: date,user: req.user.id });
    if (!data) {
      return res.status(200).json({ excercise: [] });
    }
    res.json({ excercise: data.exercises });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/piechart", fetchuser, async (req, res) => {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const workouts = await Workout.aggregate([
      {
        $match: {
          user: new ObjectId(req.user.id),
          date: { $gte: oneWeekAgo },
        },
      },
      {
        $unwind: "$exercises",
      },
      {
        $group: {
          _id: "$exercises.b_part",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json(workouts);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get("/barchart", fetchuser, async (req, res) => {
  try {
    const today = moment().startOf("day");
    const weekStart = today.clone().subtract(6, "days");

    const workouts = await Workout.aggregate([
      {
        $match: {
          user: new ObjectId(req.user.id),
          date: {
            $gte: new Date(weekStart.toDate().toLocaleDateString("en-CA")),
            $lte: new Date(today.toDate().toLocaleDateString("en-CA")),
          },
        },
      },
      {
        $unwind: "$exercises",
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          totalCalories: { $sum: "$exercises.calorie_burn" },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    res.json(workouts);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
