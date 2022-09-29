const express = require('express');
const { getIdeas, setIdea, updateIdea, deleteIdea } = require('../controllers/ideasController');
const {protect} = require('../middlewares/authMiddleware')
const router = express.Router()

router.get('/', protect, getIdeas)
router.post('/', protect, setIdea)

router.put('/:id', protect, updateIdea)
router.delete('/:id', protect, deleteIdea)


module.exports = router;