require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Notes API running on port ${PORT}`));
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  }
})();