const Task = require("./models");

module.exports = {
    Index : (req, res) => {
        Task.find()
            .then(data => res.json({ Task : data }))
            .catch(err => res.json(err))
    },
    TaskById : (req, res) => {
        Task.findOne({ _id : req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    Create : (req, res) => {
        Task.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    Update : (req, res) => {
        Task.updateOne({ _id : req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    Delete : (req, res) => {
        Task.remove({ _id : req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}