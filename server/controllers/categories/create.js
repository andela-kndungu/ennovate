import Categories from '../../models/categories.js';
import parseError from '../parseError.js';

const create = (req, res) => {
  // Declare new instance of the Tags model
  const category = new Categories();

  // Define values of the new object to add
  category.title = req.body.title;

  // Save the new tag parsing the error if request is invalid
  category.save((error) => {
    if (error) {
      return parseError(res, error);
    }

    // Tag created, return created tag
    return res.json(category);
  });
};

export default create;

