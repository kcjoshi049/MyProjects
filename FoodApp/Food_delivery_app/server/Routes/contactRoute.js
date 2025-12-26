import saveContact from "../connectors/contactConnector.js";
import express from 'express';

const router = express.Router();

router.post("/",saveContact);

export default router;