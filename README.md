# TODOS-CLI

A CLI tool for a tutorial for LogRocket on how to create a CLI tool using Node.js.

## Installation

Clone the repository:

```
git clone https://github.com/shahednasser/todos-cli.git
```

Install the dependencies:

```
npm i
```

Install the package globally on your machine:

```
npm i -g
```

## Usage

1. To view the TODO list:

```
todos list
```

2. To add a TODO task:

```
todos add <task>
```

For example:

```
todos add "Make Dinner"
```

If the task text has spaces either put quotations around it or escape the spaces. If it doesn't, quotations are not necessary.

3. Mark tasks as done:

```
todos mark-done
```

This will mark all tasks as done. To mark specific tasks as done by their indices, run:

```
todos mark-done -t 1 2
```

where `-t, --tasks` can take at least one value. Values are separated by spaces.