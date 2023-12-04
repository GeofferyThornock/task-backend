import { Request, Response } from "express";

interface Task {
    task: string;
    desc?: string;
    priority?: number;
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
    if (Array.isArray(req.body.data)) {
        const data: Task[] = req.body.data;

        data.forEach((e) => {
            const newTask = {
                task: e.task,
                completed: e.completed,
            };
            console.log(e);
            arr.push(newTask);
        });

        res.status(201).json([...data]);
    } else {
        const data: Task = req.body.data;
        const newTask = {
            task: data.task,
            desc: data.desc,
            priority: data.priority,
            completed: data.completed,
        };

        arr.push(newTask);

        res.status(201).json({ data: newTask });
    }
}
