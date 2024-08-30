import Ad from "../models/ad.model.js";
import { errorHandler } from "../utils/error.js";

export const createAd = async (req, res, next) => {
    if(!{role:'jobposter'}){
        return next(errorHandler(403,'You are not allowed to create an ad'))
    }

  
    if(!req.body.title){
        return next(errorHandler(400,'Please add all fields'));
    }
    const ad = new Ad({
        //userId:req.body.userId,
        title:req.body.title,
        image:req.body.image,

        
    });
    try {
        await ad.save();    

        res.status(201).json({
            success:true,
            ad
        });
    } catch (error) {
        next(error);
    }
}

export const getAds= async (req,res,next)=>{
    try{
        const ads = await Ad.find();
        res.status(200).json(ads);

    }catch(error){
        next(error);
    }
};

export const deleteAd = async (req, res, next) => {
    //
    //

    try {
        await Ad.findByIdAndDelete(req.params.adId);

        res.status(200).json("Ad has been deleted");
    } catch (error) {    
        next(error);
    }
}

export const updatead = async (req, res, next) => {
//i have to add function for get userID
//
  try {
    const updatead = await Ad.findByIdAndUpdate(req.params.adId, {
      
        $set:{
            title:req.body.title,
            image:req.body.image,

        }
    });
    res.status(200).json(updatead);
    
  } catch (error) {
    next(error);
  }
}
