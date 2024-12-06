export interface IQuestion {
    id: number,
    question: string,
    answer: string,
}

const cards: IQuestion[] = [
    {
        id: 0,
        question: 'Why is Webflow the best nocode tool?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
    {
        id: 1,
        question: 'Why is Webflow the best nocode tool?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
    {
        id: 2,
        question: 'Why is Webflow the best nocode tool?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    }
]

export default cards;