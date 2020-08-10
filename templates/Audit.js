"use strict";
const mongoose = require('mongoose');

module.exports = mongoose.model('Log', {
  "user": Object,
  "event": String,
  "auditable_id": Number,
  "auditable": Object,
  "ip": String,
  "url": String,
  "old_data": Object,
  "new_data": Object,
  "created_at": Date
});
