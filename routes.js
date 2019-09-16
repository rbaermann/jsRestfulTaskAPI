const controller = require("./controller");

module.exports = (app) => {
    app.get("/tasks", controller.Index);
    app.get("/tasks/:id", controller.TaskById);
    app.post("/tasks", controller.Create);
    app.put("/tasks/:id", controller.Update);
    app.delete("/tasks/:id", controller.Delete);
}