import Documents from '../../models/documents.js';
import Tags from '../../models/tags.js';

import parseError from '../parseError.js';

const create = (req, res) => {
  // Declare new instance of the Documents model
  const document = new Documents();

  // Define values of the new objet to add
  document.title = req.body.title;
  document.content = req.body.content;
  document.tags = req.body.tags || [];
  document.accessibleBy = req.body.accessibleBy || ['user'];

  // Create new tags if necessary
  document.tags.forEach((tag) => {
    Tags.findOne({
      title: tag
    }, (error, found) => {
      if (!found) {
        const newTag = new Tags();
        newTag.title = tag;
        newTag.save();
      }
    });
  });

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

