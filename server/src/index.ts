// server
import express,{Response, Request} from 'express'
import pool from './database'

const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
//const pool = require("./database");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

// Create a task

/**
 * Sample request body:
 * {
 *    "date": "2020-12-31",
 *    "task": "Sample Task",
 *    "description": "This is a sample task"
 * }
 * 
 * Sample response body:
 * {
 * "id": 1,
 * "task_column": "Sample Task",
 * "description_column": "This is a sample task",
 * "date_column": "2020-12-31T00:00:00.000Z"
 * }
 */
app.post("/addItem", async (req: Request, res: Response) => {
    try {
        const { date_column, task_column, description_column } = req.body;
        console.log('Values from the client:');
        console.log(date_column, task_column, description_column, req.body);
        const newTask = await pool.query(
            "INSERT INTO tasks (task_column, description_column, date_column) VALUES($1, $2, $3) RETURNING *",
            [task_column, description_column, date_column]
        );
        res.json(newTask.rows);
    } catch (err) {
        if(err instanceof Error)
            console.error(err.message);
    }
});

// Get all tasks from a specific date

/**
 * Sample request body:
 * {
 *   "date": "2020-12-31"
 * }
 *  
 * Sample response body:
 * [
 *  {
 *   "id": 1,
 *  "task_column": "Sample Task",
 * "description_column": "This is a sample task",
 * "date_column": "2020-12-31T00:00:00.000Z"
 * }
 * ]
 * 
    */
app.get("/getItems/:date", async (req: Request, res: Response) => {
    try {
        const { date } = req.params;
        console.log(date);
        const allTasks = await pool.query(
            "SELECT * FROM tasks WHERE date_column = $1",
            [date]
        );
        console.log(allTasks.rows);
        res.json(allTasks.rows);
    } catch (err) {
        if(err instanceof Error)
            console.error(err.message);
    }
});

// update a task
/**
 * Sample request Params:
 * {
 * "id": 1
 * }
 * 
 * Sample request body:
 * {
 * "task": "Sample Task",
 * "description": "This is a sample task",
 * "date": "2020-12-31"
 * }
 * 
 */

app.put("/changeItem/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { task, description, date } = req.body;
        const updateTask = await pool.query(
            "UPDATE tasks SET task_column = $1, description_column = $2, date_column= $4 WHERE id = $3",
            [task, description, id, date]
        );

        res.json("Task was updated!");
    } catch (err) {
        if(err instanceof Error)
            console.error(err.message);
    }
});

// delete a task
/**
 * Sample request Params:
 * {
 *  "id": 1
 * }
 */
app.delete("/deleteItem/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteTask = await pool.query(
            "DELETE FROM tasks WHERE id = $1",
            [id]
        );

        res.json("Task was deleted!");
    } catch (err) {
        if(err instanceof Error)
            console.error(err.message);
    }
});



  
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});

