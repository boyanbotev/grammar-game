import { Question } from "./types";

export const questions: Question[] = [
    {
        question: "Yesterday, Louise ____ to the park after dinner.",
        answers: [
            {
                content: "is",
                correct: false
            },
            {
                content: "go",
                correct: false
            },
            {
                content: "went",
                correct: true,
            }
        ]
    },
    {
        question: "Every day, I ____ to the park after dinner.",
        answers: [
            {
                content: "is",
                correct: false
                },
            {
                content: "have",
                correct: false
                },
            {
                content: "go",
                correct: true,
            },
            {
                content: "went",
                correct: false
            },
        ]
    }
];