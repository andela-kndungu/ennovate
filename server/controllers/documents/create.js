import Documents from '../../models/documents.js';
import Categories from '../../models/categories.js';

import parseError from '../parseError.js';

const create = (req, res) => {
  // Declare new instance of the Documents model
  const document = new Documents();
  // Define values of the new objet to add
  document.owner = req.decoded._id;
  document.title = req.body.title;
  document.content = req.body.content;
  document.category = req.body.category;
  document.accessibleBy = req.body.accessibleBy || ['user'];

  // Create new tags if necessary
  Categories.find({
    title: document.category
  }, (error, found) => {
    if (!found[0]) {
      const newCategory = new Categories();
      newCategory.title = document.category;
      newCategory.save();
    }
  });

  // Save the new document parsing the error if request is invalid
  document.save((saveError) => {
    if (saveError) {
      return parseError(res, saveError);
    }
    console.log(document);

    // Document created, return newly created document
    return res.json(document);
  });
};

export default create;

