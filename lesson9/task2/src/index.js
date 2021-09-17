import { initTodoListHandler } from './list/todoList.js';
import { renderTasks } from './list/render.js';
import { getTasksList } from './list/tasksGateway.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((taskslist) => renderTasks(taskslist));

  initTodoListHandler();
});

// 1. Get data from server
// 2. Save data to front-end storage
