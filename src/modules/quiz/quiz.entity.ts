import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";
@Entity('quiz')

export class Quiz extends BaseEntity {

    @PrimaryGeneratedColumn(
        {
         comment: 'The id of the quiz',
        }
    )

    id: number;

    @Column({
        type: 'varchar',
    })
    title: string;

    @Column({
        type: 'text',
    })
    description: string;

    @Column({ 
        type : 'boolean',
    })
    isActive: boolean;

    @OneToMany(()=> Question, (question) => question.quiz)
    questions: Question[];
}