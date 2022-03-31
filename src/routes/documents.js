import express from 'express';
import multer from "multer";
import DocumentsManager from '../controllers/documents/documents';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const route = express.Router();

route.post('/add', upload.array("files"), DocumentsManager.addDocument)
route.get('/getall', DocumentsManager.getAllDocuments)
route.get('/getone/:id', DocumentsManager.getOneDocuments)
route.delete('/delete/:id', DocumentsManager.deleteDocuments)

export default route;
