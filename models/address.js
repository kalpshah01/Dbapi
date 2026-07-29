const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
    {
        address: { type: String, required: true },
        address2: { type: String, default: '' },
        district: { type: String, default: '' },
        city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
        postal_code: { type: String, default: '' },
        phone: { type: String, default: '' },
        temp: { type: Date, default: Date.now },
        last_update: { type: Date, default: Date.now },
    }
);

module.exports = mongoose.model('Address', addressSchema);