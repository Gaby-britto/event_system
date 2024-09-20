const { Router } = require('express');
const EventoController = require('../Controller/eventoController');

const router = Router();

router.post('/evento', EventoController.create);
router.get('/evento', EventoController.getAll);
router.get('/evento/:id', EventoController.getOne);
router.put('/evento/:id', EventoController.update);
router.delete('/evento/:id', EventoController.delete);

module.exports = router;
