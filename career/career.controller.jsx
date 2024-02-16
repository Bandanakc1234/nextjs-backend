const Career = require("./career.model")

//to create new category
exports.addCareer = async (req, res, next) => {
    const career = new Career({
        title : req.body.title
    })
    //category.categoery_name = req.body.category_name
    await career.save()
    if (!career) {
        return next({
            msg: "something went wrong",
            status: 400
        })
    }
    res.json(career)
}
return next({
    msg: "Career already saved",
    status: 400
})



