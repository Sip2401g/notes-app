const router = require('express').Router();
const Note = require('../models/Note');

// GET all notes
router.get('/', async (req, res, next) => {
  try {
    const notes = await Note.find().sort({ pinned: -1, createdAt: -1 });
    res.json(notes);
  } catch (err) { next(err); }
});

// GET single note
router.get('/:id', async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (err) { next(err); }
});

// POST create note
router.post('/', async (req, res, next) => {
  try {
    const { title, content, color, pinned } = req.body;
    if (!title || !content)
      return res.status(400).json({ error: 'Title and content are required' });

    const note = await Note.create({ title, content, color, pinned });
    res.status(201).json(note);
  } catch (err) { next(err); }
});

// PUT update note
router.put('/:id', async (req, res, next) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (err) { next(err); }
});

// DELETE note
router.delete('/:id', async (req, res, next) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (err) { next(err); }
});

// PATCH toggle pin
router.patch('/:id/pin', async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    note.pinned = !note.pinned;
    await note.save();
    res.json(note);
  } catch (err) { next(err); }
});

module.exports = router;