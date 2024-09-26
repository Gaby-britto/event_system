const Participante = require("../Models/participantesModel");

const ParticipanteController = {
  create: async (req, res) => {
    try {
      const { nome, email, eventoId } = req.body;

      console.log(nome, email, eventoId);

      const emailsEncontrados = await Participante.findAll({
        where: { email: email },
        attributes: ["email"],
      });

      if (emailsEncontrados.length > 0) {
        console.log("Email já existente!!");
        return res.status(400).json({ msg: "Email já cadastrado!" });
      }

      const participantCreated = await Participante.create({
        nome,
        email,
        eventoId,
      });

      return res.status(200).json({
        msg: "Participante Criado!",
        participant: participantCreated,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, email, eventoId } = req.body;

    try {
      const particianteUpdate = await Participante.findByPk(id);
      if (particianteUpdate === null) {
        return res.status(404).json({
          msg: "Participante não encontrado",
        });
      }

      const update = await particianteUpdate.update({
        nome,
        email,
        eventoId,
      });

      return res.status(200).json({
        msg: "Participante atualizado com sucesso!",
        update,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const participantes = await Participante.findAll();
      return res.status(200).json({
        msg: "Participantes encontrados com sucesso:",
        participantes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const participanteEncontrado = await Participante.findByPk(id);
      if (participanteEncontrado === null) {
        return res.status(404).json({
          msg: "Participante não encontrado!",
        });
      }

      res.status(200).json({
        msg: "Participante encontrado!",
        participante: participanteEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const participanteFinded = await Participante.findByPk(id);

      if (participanteFinded === null) {
        return res.status(200).json({
          msg: "Participante não encontrado",
        });
      }

      await participanteFinded.destroy();

      return res.status(200).json({
        msg: "Participante excluído com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },

  getAllParticipantes: async (req, res) => {
    try {
      const { eventoId } = req.params;
      const particantesEncontrados = await Partcipante.findAll({
        where: { eventoid: eventoId },
        attributes: ["nome", "email", "eventoId"],
      });

      return res.status(200).json({
        msg: "Participantes encontrados! ",
        participantes: particantesEncontrados,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
  getAllParticipants: async (req, res) => {
    try {
      const { id } = req.params;
      const particantesEncontrados = await Participante.findAll({
        where: { eventoId: id },
        attributes: ["nome", "email", "eventoId"],
      });

      return res.status(200).json({
        msg: "Participantes encontrados! ",
        participantes: particantesEncontrados,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte!",
      });
    }
  },
};

module.exports = ParticipanteController;
