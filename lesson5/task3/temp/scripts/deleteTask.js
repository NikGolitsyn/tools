import "core-js/modules/es.promise.js";
import { getTasksList, baseUrl } from './tasksGateway.js';
import { renderTasks } from './render.js';
export const deleteTask = (event, taskId) => {
  const isDeleteButton = event.target.classList.contains('list-item__delete-btn');

  if (!isDeleteButton) {
    return;
  }

  fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  }).then(() => getTasksList()).then(tasks => renderTasks(tasks));
};