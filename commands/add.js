const conf = new (require('conf'))()
const chalk = require('chalk')

function add (task) {
    let todosList = conf.get('todo-list')

    if (!todosList) {
        //default value for todos-list
        todosList = []
    }

    //push the new task to the todos-list
    todosList.push({
        text: task,
        done: false
    })

    //set todos-list in conf
    conf.set('todo-list', todosList)

    //display message to user
    console.log(
        chalk.green.bold('Task has been added successfully!')
    )
}

module.exports = add