import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['nombre'])
export class Producto {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    nombre: string;

    @Column('decimal')
    precio: number

    @Column()
    stock: number

}
