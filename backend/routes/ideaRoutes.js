const express = require('express');
const { getIdeas, setIdea, updateIdea, deleteIdea } = require('../controllers/ideasController');

const router = express.Router()

router.get('/', getIdeas)
router.post('/', setIdea)

router.put('/:id', updateIdea)
router.delete('/:id', deleteIdea)


module.exports = router;