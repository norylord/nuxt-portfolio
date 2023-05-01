import exp from "constants";

export interface IProject {
    id: number,
    title: string,
    framework: 'vue' | 'react',
    description: string,
    imgName: string,
}

const projectsList = <IProject[]>[
    {
        id: 1,
        title: 'rick-and-mory-ts',
        framework: 'vue',
        description: 'Simple Rick And Morty API project (in development)',
        imgName: 'RAM.jpg'
    },
    {
        id: 2,
        title: 'emphasoft-test',
        framework: 'vue',
        description: 'Test projects, realized auth and registration, simple CRUD system',
    },
    {
        id: 3,
        title: 'task-manager',
        framework: 'vue',
        description: 'Simple task manager',
        imgName: 'todo.png'
    },
    {
        id: 4,
        title: 'raider-io-api',
        framework: 'vue',
        description: 'Checking user RIO points and getting info about personage',
        imgName: 'raiderio.png'
    },
    {
        id: 5,
        title: 'rick-and-morty',
        framework: 'react',
        description: 'First project on React, realize of Rick and Morty API',
        imgName: 'RAM.jpg'
    },
    {
        id: 6,
        title: 'next.js-crud',
        framework: 'react',
        description: 'First Next.js project, realized simple CRUD system',
        imgName: 'next.jpg'
    },
    {
        id: 7,
        title: 'quiz',
        framework: 'react',
        description: 'Simple Quiz on React',
        imgName: 'quiz.jpg'
    },
    {
        id: 8,
        title: 'custom-trello',
        framework: 'react',
        description: 'Created task manager, realized with Drag and Drop API',
        imgName: 'trello.png'
    },
    {
        id: 9,
        title: 'rick-and-morty',
        framework: 'vue',
        description: 'First project on Vue, realized with Rick and Morty API',
        imgName: 'RAM.jpg'
    },
    {
        id: 10,
        title: 'smart-city',
        framework: 'react',
        description: 'Created mobile app for hacaton 2022 Умный город ',
        imgName: 'smart-city.jpg'
    },
]

export default projectsList