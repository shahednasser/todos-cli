const conf = new (require('conf'))()
const chalk = require('chalk')

function markDone({tasks}) {
    let todosList = conf.get('todo-list')

    if (todosList) {
        todosList = todosList.map((task, index) => {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    //mark only specified tasks by user as done
                    task.done = true
                }
            } else {
                //if the user didn't specify tasks, mark all as done
                task.done = true
            }
            return task
        });

        //set the new todo-list
        conf.set('todo-list', todosList)
    }

    //show the user a message
    console.log(
        chalk.green.bold('Tasks have been marked as done successfully')
    )
}

module.exports = markDone