import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "./quiz.entity";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Repository } from "typeorm";
import { QuizRepository } from "./quiz.repository";

@Injectable()

export class QuizService {
    constructor(
        @InjectRepository(Quiz) private readonly quizRepository: QuizRepository,){}


    async getAllQuiz() {
        return await this.quizRepository.find();
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({ where: { id }, relations: ['questions'] });
      }

    async createNewQuiz(quiz: CreateQuizDto) {
  return await this.quizRepository.save(quiz);
    }

}


