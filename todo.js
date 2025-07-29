const fs = require("fs");
const filePath = "./tasks.json";

const loadtask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadtask();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("task added", task);
};

const listTasks = () => {
  const tasks = loadtask();
  tasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task.task}`);
  });
};

// const removeTask = (taskIndex) => {
//   const tasks = loadtask();
//   if (taskIndex < 1 || taskIndex > tasks.length) {
//     console.log("Inavalid task number.");
//   }
//   const removed = tasks.splice(taskIndex - 1, 1);
//   saveTasks();
//   console.log("Task removed:", removed[0].task);
// };

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("command not found !");
}
