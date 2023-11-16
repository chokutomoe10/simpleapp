import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "transactions" })
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    invoice_number: string

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    invoice_date: Date

    @Column()
    customer: string

    @Column()
    qty: number

    @Column()
    product_detail: string

}
