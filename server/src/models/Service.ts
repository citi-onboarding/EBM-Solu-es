import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()

export class Service {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    icone: string 

    @Column()
    name_service: string

}