import { EntityRepository, Repository } from 'typeorm';
import { Question } from './question.entity'; // Sesuaikan path
import { Quiz } from './quiz.entity';

@EntityRepository(Question)
export class QuizRepository extends Repository<Quiz> {
  // Tambahkan metode kustom jika perlu
}
