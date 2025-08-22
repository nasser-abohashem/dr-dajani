// import mongoose from 'mongoose';

// const ChildSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: Number,
//   parentName: String,
//   phone: String,
//   street: String,
//   birthDate: Date,
// }, { timestamps: true });


// export default mongoose.models.Child || mongoose.model('Child', ChildSchema);

import mongoose from 'mongoose';

const LiveSchema = new mongoose.Schema({
  liveLink: { type: String, required: true },
}, {
  collection: 'live',     // اسم الكولكشن
  timestamps: true        // (اختياري) بيضيف createdAt و updatedAt
});

export default mongoose.models.Live || mongoose.model('Live', LiveSchema);
