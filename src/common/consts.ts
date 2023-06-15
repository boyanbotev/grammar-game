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
                content: "went",
                correct: false
            },
            {
                content: "be",
                correct: false
                },
            {
                content: "go",
                correct: true,
            },
        ]
    },
    {
        question: "Who are you?",
        answers: [
            {
                content: "Who who?",
                correct: true,
            },
            {
                content: "who who?",
                correct: true,
            }
        ]
    }
];