const router = require('express').Router();

// /api/blog

router.get('/', (req, res) => {
    console.log(`I'm hit!`);
});

module.exports = router;