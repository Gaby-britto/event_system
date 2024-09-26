const { Router } = require('express');
const ParticipanteController = require('../Controller/participanteController');

const router = Router();

router.post('/participante', ParticipanteController.create);
router.get('/participante', ParticipanteController.getAll);
router.get('/participante/:id', ParticipanteController.getOne);
router.put('/participante/:id', ParticipanteController.update);
router.delete('/participante/:id', ParticipanteController.delete);
router.get('/por-evento/:eventoId', (req, res) =>{
    ParticipanteController.getAllParticipantsEvent(req, res)
})

module.exports = router;