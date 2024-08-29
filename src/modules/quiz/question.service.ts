import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "./quiz.entity";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Repository } from "typeorm";
import { Question } from "./question.entity";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { QuestionRepository } from "./question.repository";

@Injectable()

export class QuestionService {
    constructor(
        @InjectRepository(Question) private questionRepository: QuestionRepository,){}


    GetAllQuestions() {
        return this.questionRepository.find();
    }


    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise <Question> {
        const newQuestion = await this.questionRepository.save({
            question: question.question,
            quiz
        });

        return newQuestion;
    }

}


