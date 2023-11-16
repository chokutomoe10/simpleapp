import { Request, Response } from "express";
import TransactionServices from "../services/TransactionServices";

class TransactionController {
    find(req:Request, res:Response){
        TransactionServices.find(req,res)
    }

    findOne(req:Request, res:Response){
        TransactionServices.findOne(req,res)
    }

    create(req:Request, res:Response){
        TransactionServices.create(req,res)
    }

    delete(req:Request, res:Response){
        TransactionServices.delete(req,res)
    }

    update(req:Request, res:Response){
        TransactionServices.update(req,res)
    }
}

export default new TransactionController()