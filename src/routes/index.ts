import * as express from 'express'
import { Request, Response } from "express"
import TransactionControllers from '../controllers/TransactionControllers'

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Hello from v1!")
})

//product
router.get("/transaction", TransactionControllers.find)
router.get("/transaction/:id", TransactionControllers.findOne)
router.post("/transaction", TransactionControllers.create)
router.patch("/transaction/update/:id", TransactionControllers.update)
router.get("/transaction/delete/:id", TransactionControllers.delete)

export default router