import express from 'express'
import personCNTRL from '../controllers/personController.mjs';

const router = express.Router();

// create
router.post('/',personCNTRL.createPerson);
// get
router.get('/',personCNTRL.getAllPersons);
router.get('/:id',personCNTRL.getPerson);
// update
router.put('/:id',personCNTRL.updatePerson);
// delete
router.delete('/:id',personCNTRL.deletePerson);

export default router;