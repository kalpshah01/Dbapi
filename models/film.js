const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, default: '' },
        release_year: { type: Number },
        language_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
        original_language_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', default: null },
        rental_duration: { type: Number, default: 3 },
        rental_rate: { type: Number, default: 0 },
        length: { type: Number, default: 0 },
        replacement_cost: { type: Number, default: 0 },
        rating: { type: String},
        special_features: { type: String },
        fulltext: { type: String, default: '' },
        revenue_projection: { type: Number, default: 0 },
        last_update: { type: Date, default: Date.now },
    }
);

module.exports = mongoose.model('Film', filmSchema);