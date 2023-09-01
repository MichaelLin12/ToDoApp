
-- Create a database

CREATE DATABASE IF NOT EXISTS PERN_TODO;

\c pern_todo;

-- Create a table
DROP TABLE IF EXISTS dates;

CREATE TABLE IF NOT EXISTS tasks (
  id Serial PRIMARY KEY,
  task_column VARCHAR(255),
  description_column VARCHAR(255),
  date_column DATE
);

-- delete all data
DELETE FROM tasks;

-- Insert some data
INSERT INTO tasks (task_column, description_column, date_column) VALUES ('Task 1', 'Description 1', '2023-09-01');
INSERT INTO tasks (task_column, description_column, date_column) VALUES ('Task 2', 'Description 2', '2023-09-02');
INSERT INTO tasks (task_column, description_column, date_column) VALUES ('Task 3', 'Description 3', '2023-09-03');