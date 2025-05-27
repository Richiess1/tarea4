import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

//crea la tabla TASK
@Entity()
export class Task {
    //llave primaria autogenerada
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: false })
    completed: boolean;

    @ManyToOne(() => User, (user) => user.tasks)
    user: User;
}
