const express = require("express");
const { default: mongoose } = require("mongoose");

const router = express.Router();
const ReportsModel = require("../../models/ReportsSchema");

//get all data

router.get("/getAllReports", async (req, res) => {
  try {
    const getAllReports = await ReportsModel.find().sort({ createdAt: -1 });
    res.status(200).send(getAllReports);
  } catch (error) {
    console.log("Error while Adding reports: ", error);
    res.status(400).send({ error: error.message });
  }
});

//get data by Id

router.get("/getReportsById/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const getReportsById = await ReportsModel.findById(id);
    res.status(200).send(getReportsById);
  } catch (error) {
    console.log("Error while Adding reports: ", error);
    res.status(400).send({ error: error.message });
  }
});

//add data
router.post("/addReport", async (req, res) => {
  const {
    location,
    reportedClaims,
    settledClaims,
    outStanding,
    dr,
    aboveThirtyDays,
    pending,
    lksPending,
    nosPending,
    rlmPending,
  } = req.body;
  try {
    const reports = await ReportsModel.create({
      location,
      reportedClaims,
      settledClaims,
      outStanding,
      dr,
      aboveThirtyDays,
      pending,
      lksPending,
      nosPending,
      rlmPending,
    });
    res.status(200).send(reports);
  } catch (error) {
    console.log("Error while Adding reports: ", error);
    res.status(400).send({ error: error.message });
  }
});

//update data
router.put("/updateReport/:id", async (req, res) => {
  try {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ error: "No such data" });
      }
    const updateReport = await ReportsModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      {new:true}
    );
    if (!updateReport) {
      return res.status(400).send({ error: "No such data" });
    }
    res.status(200).send(updateReport);
  } catch (error) {
    console.log("Error while updating reports: ", error);
    res.status(400).send({ error: error.message });
  }
});

//delete data
router.put("/deleteReport/:id", (req, res) => {
  res.send({ msg: "delete data" });
});

module.exports = router;
