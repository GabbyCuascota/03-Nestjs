import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('web_cuascotag_usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 50})
    nombre: string;
}