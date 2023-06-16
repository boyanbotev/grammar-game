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
    }, 
    {
        question: "Is blue blue?",
        answers: [
            {
                content: "yes",
                correct: true,
            },
            {
                content: "no",
                correct: false,
            }
        ]
    },
    {
        question: "Is red red?",
        answers: [
            {
                content: "yes",
                correct: true,
            },
            {
                content: "no",
                correct: false,
            }
        ]
    },
    {
        question: "Is orange orange?",
        answers: [
            {
                content: "yes",
                correct: true,
            },
            {
                content: "no",
                correct: false,
            }
        ]
    },
    {
        question: "Is yellow yellow?",
        answers: [
            {
                content: "yes",
                correct: true,
            },
            {
                content: "no",
                correct: false,
            }
        ]
    },
    {
        question: "Is grey grey?",
        answers: [
            {
                content: "yes",
                correct: true,
            },
            {
                content: "no",
                correct: false,
            }
        ]
    },
    {
        question: "Is black black?",
        answers: [
            {
                content: "yes",
                correct: true,
            },
            {
                content: "no",
                correct: false,
            }
        ]
    },
    {
        question: "Is black white?",
        answers: [
            {
                content: "yes",
                correct: false,
            },
            {
                content: "no",
                correct: true,
            }
        ]
    },
];