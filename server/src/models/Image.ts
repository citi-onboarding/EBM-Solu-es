import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string 

    @Column()
    name: string 

}
