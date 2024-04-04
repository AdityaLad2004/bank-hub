// models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    title: String,
    _id: String,
    status: String,
    description: String,
});

module.exports = mongoose.models.Complaint || mongoose.model('Complaint', complaintSchema);
