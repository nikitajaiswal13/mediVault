const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patientController');
const authController = require('../controllers/authController');

// Protect all routes after this
router.use(authController.protect);

router
  .route('/')
  .get(patientController.getAllPatients)
  .post(patientController.createPatient);

router
  .route('/:id')
  .get(patientController.getPatientById)
  .delete(patientController.deletePatient);

module.exports = router;
