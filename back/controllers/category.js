const Category = require("../models/Category");

const CategoryController = {
  oneCategory(req, res, next) {
    const id = req.params.id;
    Category.findByPk(id).then((category) => {
      res.send(category);
    });
  },

  allCategories(req, res, next) {
    Category.findAll()
      .then((categories) => {
        res.send(categories);
      })
      .catch(next);
  },

  createCategory(req, res, next) {
      Category.create(req.body)
      .then((newCategory) => {
          res.send(newCategory)
      })
      .catch(next)
  },

  editCategory(req, res, next) {
      Category.findByPk(req.params.id)
      .then((categoryFound) => {
          categoryFound.update({name: req.body.name})
      })
      .then(() => {
          res.status(200).send("category updated succesfully")
      })
      .catch(next)
  },

  removeCategory(req, res, next) {
      Category.findByPk(req.params.id)
      .then((category) => {
          category.destroy()
          res.status(200).send("category removed")
      })
      .catch(err => console.log(err))
  },
};

module.exports = CategoryController;
