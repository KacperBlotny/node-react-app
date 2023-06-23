const asyncHandler = require("express-async-handler");
const { client } = require("../databasepg");

// @desc  Register new activity
// /api/activities
// @access Private

const registerActivity = asyncHandler(async (req, res) => {
  const { userid, date, startTime, endTime, name } = req.body;

  // Validation
  if (!userid || !name) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  try {
    // Add to database
    const insertQuery =
      "INSERT INTO Activities (userid, date, startTime, endTime, name) VALUES ($1, $2, $3, $4, $5) RETURNING activityid";
    const insertValues = [userid, date, startTime, endTime, name];
    const insertResult = await client.query(insertQuery, insertValues);

    console.log(insertResult.rows[0].activityid);

    res.status(201).json({
      activityID: insertResult.rows[0].activityid,
      name: name,
      date,
      startTime,
      endTime,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc  Edit activity
// /api/activities
// @access Private

const editActivity = asyncHandler(async (req, res) => {
  const { userid, name, date, startTime, endTime, activityid } = req.body;
  try {
    const query =
      "UPDATE Activities SET userid = $1,  name = $2, date = $3, startTime = $4, endTime = $5 WHERE activityid = $6";
    const values = [userid, name, date, startTime, endTime, activityid];
    await client.query(query, values);
    res.status(200).json({ message: "Activity updated successfully" });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc  Delete activity
// /api/activity
// @access Private

const deleteActivity = asyncHandler(async (req, res) => {
  try {
    const query = "DELETE FROM Activities WHERE activityid = $1";
    const values = [req.body.activityid];
    await client.query(query, values);
    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc  Get activities
// /api/activity
// @access Private

const getActivities = asyncHandler(async (req, res) => {
  try {
    console.log("x");
    const query = "SELECT * FROM Activities";
    const result = await client.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc  Get activity
// /api/activities/activity
// @access Private

const getActivity = asyncHandler(async (req, res) => {
  try {
    const query = "SELECT * FROM Activities WHERE activityid = $1";
    const values = [req.body.activityid];
    const result = await client.query(query, values);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

module.exports = {
  registerActivity,
  editActivity,
  deleteActivity,
  getActivities,
  getActivity,
};
