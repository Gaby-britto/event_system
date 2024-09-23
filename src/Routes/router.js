const { Router } = require('express');

const router = Router();

const EventoRoutes = require('./eventoRouter');
const ParticipanteRoutes = require('./participanteRouter');
const ParticipanteController = require('../Controller/participanteController');

router.use('/evento', EventoRoutes);
router.use('/participante', ParticipanteRoutes);
router.get('/por-evento/:eventoId', (req, res) =>{
    ParticipanteController.getAllParticipants(req, res)
})

module.exports = router;