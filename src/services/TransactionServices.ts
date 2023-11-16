import { Repository } from "typeorm";
import { Transaction } from "../entities/Transaction";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

class TransactionService {
    private readonly transactionRepository: Repository<Transaction> = AppDataSource.getRepository(Transaction);

    async find(req: Request, res: Response) {
        try {
            const transactions = await this.transactionRepository.find()
            
            return res.status(200).json(transactions)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const transaction = await this.transactionRepository.findOne({
            where : {id : id}
        })
        return res.status(200).json(transaction)
    }
    
    async create(req: Request, res: Response) {
        const data = req.body
        const transaction = this.transactionRepository.create({
            invoice_number: data.invoice_number,
            customer: data.customer,
            qty: data.qty,
            product_detail: data.product_detail
        })
        await this.transactionRepository.save(transaction)
        return res.status(200).json("Transaction created")
    }

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const deletedTransaction = await this.transactionRepository.delete(id)
        return res.status(200).json(deletedTransaction)
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const transaction = await this.transactionRepository.findOne({
            where : {id : id}
        })
        const data = req.body

        transaction.customer = data.customer
        transaction.invoice_number = data.invoice_number
        transaction.product_detail = data.product_detail
        transaction.qty = data.qty

        const updatedTransaction = await this.transactionRepository.save(transaction)

        return res.status(200).json(updatedTransaction)
    }
}

export default new TransactionService()