import express from 'express';
import getAllItems from '../connectors/connectros.js';

let route = express.Router();

route.route('/').get(getAllItems);


export default route;