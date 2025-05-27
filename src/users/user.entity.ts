import { Task } from "src/tasks/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

//crea la tabla USER
@Entity()
export class User {
    //llave primaria autogenerada
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
}
