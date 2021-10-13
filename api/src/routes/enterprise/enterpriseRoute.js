const express = require('express');
const router = express.Router();
const { createEnterprise, readEnterprise, updateEnterprise,deleteEnterprise} = require("../../controllers/enterpriseController.js")

router.post('/',createEnterprise);
router.get('/',readEnterprise);
router.put('/',updateEnterprise);
router.delete('/',deleteEnterprise);

module.exports = router;