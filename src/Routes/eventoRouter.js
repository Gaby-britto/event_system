const { Router } = require("express");
const EventoController = require("../Controller/eventoController");
const ParticipanteController = require("../Controller/participanteController");

const router = Router();

router.post("/evento", EventoController.create);
router.get("/evento", EventoController.getAll);
router.get("/evento/:id", EventoController.getOne);
router.put("/evento/:id", EventoController.update);
router.delete("/evento/:id", EventoController.delete);
router.get("/:id/participante", (req, res) => {
  ParticipanteController.getAllParticipants(req, res);
});

module.exports = router;
