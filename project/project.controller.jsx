const Project = require("./project.model")

exports.getAllProjects = (req, res, next) =>{
    var condition = {}
    Project.find(condition, {
    })
    .sort({
        _id: -1
    })
    .exec()
    .then((projects)=>{
        if(!projects){
            return next({
                msg:"project not found!!"
            })
        }
        if(projects){
            res.json(projects)
        }
    })
    .catch((err) =>{
        return next(err)
    })
}