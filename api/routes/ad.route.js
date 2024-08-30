import express from 'express';
import { createAd, deleteAd, getAds, updatead } from '../controllers/ad.controller.js';

const router = express.Router();

router.post('/createad',createAd);
router.get('/getads',getAds);
router.delete('/deletead/:adId',deleteAd);
router.put('/updatead/:adId',updatead);

export default router;