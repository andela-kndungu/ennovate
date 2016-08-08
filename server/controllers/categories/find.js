import Categories from '../../models/categories.js';

const find = {
  all: (req, res) => {
    // Get all entries in the tags model
    Categories.find({}, (error, categories) => {
      // Inform user of errors with the database
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'There was an error reading from the database'
        });
      }

      // Success, return retrieved tags with success message
      return res.json(categories);
    });
  }
};

export default find;

