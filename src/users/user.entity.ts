import { Task } from "src/tasks/task.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

//crea la tabla USER
@Entity()
export class User { //NO TOCAR NADA//
    //llave primaria autogenerada
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
    if (this.password) {
        const rounds = 10;
        this.password = await bcrypt.hash(this.password, rounds);
    } else {
        throw new Error('La contraseña no puede estar vacía');
    }
    }

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
}
