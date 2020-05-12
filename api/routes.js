const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const getProjectList = async (req, res, next) => {
    try {
        const projectListData = fs.readFileSync(path.join(__dirname, './projectlist.json'));
        const projectList = JSON.parse(projectListData);
        res.json(projectList);
    } catch (e) {
        next(e);
    }
};

router.route('/projectlist').get(getProjectList);

module.exports = router;
