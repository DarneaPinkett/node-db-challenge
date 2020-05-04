const db = require('./dbConfig');

function findAllProjects() {
    return db("projects");
}

function findAllResources() {
    return db("resources")
}

function findAllTasks(Project_id) {
    return db('tasks')
    .where({Project_id})
}

function addProjects(project) {
    return db('projects').insert(project)
}

function addTasks(task) {
    return db('tasks').insert(task)
}

function addResources(resource) {
    return db('resources').insert(resource);
}
module.exports = {
    findAllResources,
    findAllProjects,
    findAllTasks,
    addResources,
    addProjects,
    addTasks
    
}