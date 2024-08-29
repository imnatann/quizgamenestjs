import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {
    @IsNotEmpty({message: 'Woi Sgima, harus ada pertanyaannya'})
    @Length(10, 200, {message: 'Deskripsi harus lebih dari 10 karakter'})
    question : string;

    @IsNotEmpty({message: 'Woi Sgima, harus ada quiznya'})
    quizId : number;


}