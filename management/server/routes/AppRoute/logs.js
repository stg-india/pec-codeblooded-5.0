const express = require('express');
const router = express.Router();

const {getStudentsAudit , revertStudentAudit,AllStudentAudit} = require("../../controllers/app/Logs");

router.get('/get-logs',getStudentsAudit);
router.get('/get-all-logs',AllStudentAudit);
router.post('/get-revert-logs',revertStudentAudit);

module.exports = router;