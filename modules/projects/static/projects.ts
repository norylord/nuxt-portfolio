import exp from "constants";

export interface IProject {
    id: number,
    title: string,
    framework: 'vue' | 'react',
    description: string,
    imgURL: string,
}

const projectsList = <IProject[]>[
    {
        id: 1,
        title: 'rick-and-mory-ts',
        framework: 'vue',
        description: 'Simple Rick And Morty API project (in development)',
        imgURL: 'https://sun9-78.userapi.com/impf/1uPGcIjSp9mGyoriMntXSore-v58Fa7fQlhMpw/BWkGfzEshuk.jpg?size=1818x606&quality=95&crop=0,0,1590,530&sign=a8fdbca497fd180e4d96ba894ed0fd30&type=cover_group'
    },
    {
        id: 2,
        title: 'emphasoft-test',
        framework: 'vue',
        description: 'Test projects, realized auth and registration, simple CRUD system',
        imgURL: 'https://webmobtuts.com/wp-content/uploads/2018/08/hero.png'
    },
    {
        id: 3,
        title: 'task-manager',
        framework: 'vue',
        description: 'Simple task manager',
        imgURL: 'https://i.imgur.com/t1cdpYn.png'
    },
    {
        id: 4,
        title: 'raider-io-api',
        framework: 'vue',
        description: 'Checking user RIO points and getting info about personage',
        imgURL: 'https://i.imgur.com/A0b6eUv.png'
    },
    {
        id: 5,
        title: 'rick-and-morty',
        framework: 'react',
        description: 'First project on React, realize of Rick and Morty API',
        imgURL: 'https://sun9-78.userapi.com/impf/1uPGcIjSp9mGyoriMntXSore-v58Fa7fQlhMpw/BWkGfzEshuk.jpg?size=1818x606&quality=95&crop=0,0,1590,530&sign=a8fdbca497fd180e4d96ba894ed0fd30&type=cover_group'
    },
    {
        id: 6,
        title: 'next.js-crud',
        framework: 'react',
        description: 'First Next.js project, realized simple CRUD system',
        imgURL: 'https://i.imgur.com/wzS8b3x.jpg'
    },
    {
        id: 7,
        title: 'quiz',
        framework: 'react',
        description: 'Simple Quiz on React',
        imgURL: 'https://i.imgur.com/2rxQWuD.jpg'
    },
    {
        id: 8,
        title: 'custom-trello',
        framework: 'react',
        description: 'Created task manager, realized with Drag and Drop API',
        imgURL: 'https://i.imgur.com/KkzEMVn.png'
    },
    {
        id: 9,
        title: 'rick-and-morty',
        framework: 'vue',
        description: 'First project on Vue, realized with Rick and Morty API',
        imgURL: 'https://sun9-78.userapi.com/impf/1uPGcIjSp9mGyoriMntXSore-v58Fa7fQlhMpw/BWkGfzEshuk.jpg?size=1818x606&quality=95&crop=0,0,1590,530&sign=a8fdbca497fd180e4d96ba894ed0fd30&type=cover_group'
    },
    {
        id: 10,
        title: 'smart-city',
        framework: 'react',
        description: 'Created mobile app for hacaton 2022 Умный город ',
        imgURL: 'https://i.imgur.com/ADbvKXd.jpg'
    },
]

export default projectsList