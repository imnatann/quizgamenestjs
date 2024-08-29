import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';
import { QuestionService } from './question.service';
import { QuizService } from './quiz.service';
@Controller('question')
export class QuestionController {
    constructor(private questionService: QuestionService, private quizService: QuizService) { }
    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() questions: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(questions.quizId);
        return await this.questionService.createQuestion(questions, quiz);
    }


}