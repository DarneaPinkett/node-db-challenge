const express = require('express');
const projectModel = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    projectModel.findAllProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json({Message: 'Failed to get all projects'})
    })
})

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;
    projectModel.findAllTasks(id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        res.status(500).json({Message: 'No tasks for that id found'})
    })
})

router.get('/:id/resources', (req, res) => {
    const {id} = req.params;
    projectModel.findAllResources(id)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => {
        res.status(500).json({Message: 'This id has no resources'})
    })
})

router.post('/', (req, res) => {
    const newProject = req.body;
    projectModel.addProjects(newProject)
    .then(project => {
        if (project.name && project.description) {
        res.status(201).json(project);
        } else {
            res.status(500).json({Message: 'Make sure you have a name and description'})
        }
    })
    .catch(error => {
        res.status(500).json({Message: 'Cannot add project'})
    })
})

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body;
    projectModel.addTasks(newTask)
    .then(task => {
        if (task.description && task.project_id) {
        res.status(201).json(task);
        } else {
            res.status(500).json({Message: 'Make sure you have description and project id'})
        }
    })
    .catch(error => {
        res.status(500).json({Message: 'Cannot add task'})
    })
})

router.post('/:id/resources', (req, res) => {
    const newResource = req.body;
    projectModel.addResources(newResource)
    .then(resource => {
        if (resource.name && resource.project_id) {
        res.status(201).json(resource);
        } else {
            res.status(500).json({Message: 'Make sure you have a name and project id'})
        }
    })
    .catch(error => {
        res.status(500).json({Message: 'Cannot add resource'})
    })
})
module.exports = router;