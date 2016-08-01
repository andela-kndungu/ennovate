import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TagsSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A tag title must be provided'],
    unique: true
  }
});

export default mongoose.model('Tags', TagsSchema);

