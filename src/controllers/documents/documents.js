import model from '../../database/models';

const { Document } = model;

class DocumentsManager {

    static async addDocument(req, res) {
        const { name, description, tags, userId } = req.body
        let file = []
        try {
            for (let i = 0; i <req.files.length; i++) {
                file.push(req.files[i].buffer)
            }
          await Document.create({
            name,
            description,
            userId,
            file
          })
          return res.status(201).send({ message: 'A document added successfully', document: { name, description, tags }});
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }

    static async getDocument(req, res) {
        const { id } = req.body
        let file = []
        try {
            for (let i = 0; i <req.files.length; i++) {
                file.push(req.files[i].buffer)
            }
          await Document.create({
            name,
            description,
            userId,
            file
          })
          return res.status(201).send({ message: 'A document added successfully', document: { name, description, tags }});
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }

    static async getAllDocuments(req, res) {
        try {
            const findDocuments = await Document.findAll();
            if(findDocuments) {
                return res.status(200).json({ total: findDocuments.length, documents: findDocuments });
            }
            return res.status(400).send({ message: 'No document found' });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }

    static async getOneDocuments(req, res) {
        
        try {
            const document = await Document.findOne({ where: { id: req.params.id } });;
            if(document) {
                return res.status(200).json({ document });
            }
            return res.status(400).send({ message: 'No document found' });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }

    static async deleteDocuments(req, res) {
        
        try {
            const id = req.params.id
            const document = await Document.findOne({ where: { id } });
            if (document) {
              await Document.destroy({ where: { id } })
              return res.status(200).json({
                message: 'Document deleted successfuly'
              });
            }
            return res.status(404).json({
              message: 'Document does not exist'
            });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }
}

export default DocumentsManager;
