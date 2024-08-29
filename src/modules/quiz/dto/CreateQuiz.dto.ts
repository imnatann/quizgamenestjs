import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    @IsNotEmpty({message: 'Woi Sgima, harus ada judulnya'})
    title : string;

    @IsNotEmpty({message: 'Woi Sgima, harus ada deskripsinya'})
    @Length(10, 200, {message: 'Deskripsi harus lebih dari 10 karakter'})
    description : string;



}