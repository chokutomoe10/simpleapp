import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"

@Entity({ name: "products" })
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    prdnm: string

    @Column()
    harga: string
}
