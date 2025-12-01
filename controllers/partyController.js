const Party = require('../models/Party');

const PartyController = {
  // Criar nova festa
  create: async (req, res) => {
    try {
      const party = new Party(req.body);
      await party.save();
      
      res.status(201).json({
        party,
        msg: 'Festa criada com sucesso!'
      });
    } catch (error) {
      console.error('Erro ao criar festa:', error);
      res.status(400).json({ 
        msg: 'Erro ao criar festa',
        error: error.message 
      });
    }
  },

  // Listar todas as festas
  getAll: async (req, res) => {
    try {
      const parties = await Party.find().populate('services');
      res.status(200).json(parties);
    } catch (error) {
      console.error('Erro ao buscar festas:', error);
      res.status(500).json({ 
        msg: 'Erro ao buscar festas',
        error: error.message 
      });
    }
  },

  // Buscar uma festa por ID
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const party = await Party.findById(id).populate('services');
      
      if (!party) {
        return res.status(404).json({ msg: 'Festa não encontrada' });
      }
      
      res.status(200).json(party);
    } catch (error) {
      console.error('Erro ao buscar festa:', error);
      res.status(500).json({ 
        msg: 'Erro ao buscar festa',
        error: error.message 
      });
    }
  },

  // ATUALIZAR festa - ESTE É O PROBLEMA!
  update: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Log para debug
      console.log('=== UPDATE PARTY ===');
      console.log('ID recebido:', id);
      console.log('Dados recebidos:', req.body);
      
      // CRÍTICO: Usar findByIdAndUpdate com { new: true }
      const party = await Party.findByIdAndUpdate(
        id,
        req.body,
        { 
          new: true,           // ← ESSENCIAL: retorna o documento ATUALIZADO
          runValidators: true  // ← IMPORTANTE: valida os dados antes de salvar
        }
      ).populate('services');
      
      if (!party) {
        return res.status(404).json({ msg: 'Festa não encontrada' });
      }
      
      // Log de confirmação
      console.log('Festa atualizada:', party);
      console.log('==================');
      
      res.status(200).json({
        party,
        msg: 'Festa atualizada com sucesso!'
      });
    } catch (error) {
      console.error('Erro ao atualizar festa:', error);
      res.status(400).json({ 
        msg: 'Erro ao atualizar festa',
        error: error.message 
      });
    }
  },

  // Deletar festa
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const party = await Party.findByIdAndDelete(id);
      
      if (!party) {
        return res.status(404).json({ msg: 'Festa não encontrada' });
      }
      
      res.status(200).json({ 
        msg: 'Festa deletada com sucesso!' 
      });
    } catch (error) {
      console.error('Erro ao deletar festa:', error);
      res.status(500).json({ 
        msg: 'Erro ao deletar festa',
        error: error.message 
      });
    }
  }
};

module.exports = PartyController;
