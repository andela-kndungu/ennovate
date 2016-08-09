import Documents from '../../models/documents.js';

import parseError from '../parseError.js';

const create = (req, res) => {
  console.log('I have been called');
  // Declare new instance of the Documents model
  const document = new Documents();
  // Define values of the new objet to add
  document.owner = req.decoded._id;
  document.title = req.body.title;
  document.content = req.body.content;
  document.category = req.body.category;
  document.accessibleBy = req.body.accessibleBy || ['user'];

  console.log(document);
  // Save the new document parsing the error if request is invalid
  document.save((saveError) => {
    if (saveError) {
      return parseError(res, saveError);
    }

    // Document created, return newly created document
    return res.json(document);
  });
};

export default create;

