import { Request, Response } from "express";

interface Task {
    task: string;
    desc?: string;
    completed: boolean;
}

const arr: Array<Task> = [
    {
        task: "Code",
        completed: false,
    },
    {
        task: "Code",
        completed: false,
    },
    {
        task: "Code",
        completed: false,
    },
];

export function list(req: Request, res: Response) {
    res.json({ data: arr });
}

export function create(req: Request, res: Response) {
    const data: Task = req.body.data;
    const newTask = {
        task: data.task,
        desc: data.desc,
        completed: data.completed,
    };

    arr.push(newTask);

    res.status(201).json({ data: newTask });
}
