const express = require("express");
const recordController = require("../controllers/recordController");
const authController = require("../controllers/authController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.use(authController.protect);
// add & get records of a patient

router.route("/").get(recordController.getAllRecords);

router
  .route("/patients/:patientId")
  .post(upload.single("file"), recordController.createRecord)
  .get(recordController.getRecordsByPatient);

router.route("/:id").delete(recordController.deleteRecord);

module.exports = router;
