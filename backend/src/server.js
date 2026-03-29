require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log('PORT:', PORT);
console.log('MONGO_URI exists:', !!MONGO_URI);

if (!MONGO_URI) {
  console.error('❌ MONGO_URI is not defined!');
  process.exit(1);
}

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Notes API running on port ${PORT}`));
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  }
})();
