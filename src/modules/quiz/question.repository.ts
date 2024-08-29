import { EntityRepository, Repository } from 'typeorm';
import { Question } from './question.entity'; // Sesuaikan path

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
  // Tambahkan metode kustom jika perlu
}
