// controllers/getAllUsers.js
const User = require('../models/userSchema');

const getAllUsers = async (req, res) => {
  const queryObj = { ...req.query };

  // 🧠 Remove special fields from query (pagination/sorting related)
  const excludedFields = ['page', 'limit', 'sort'];
  excludedFields.forEach((field) => delete queryObj[field]);

  // 🎯 Filtering
  let query = User.find(queryObj);

  // 🎯 Sorting
  if (req.query.sort) {
    query = query.sort(req.query.sort);
  } else {
    query = query.sort('-createdAt'); // default: latest first
  }

  // 🎯 Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  const users = await query;

  res.status(200).json({
    success: true,
    count: users.length,
    page,
    users,
  });
};

module.exports =  getAllUsers ;
