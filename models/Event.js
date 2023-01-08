const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        serviceDate: {
            type: String,
            required: true,
        },
        serviceTime: String,
        transportVIN: {
            type: String,
            required: true,
        },
        transportODO: {
            type: Number,
            required: true,
        },
        serviceType: {
            type: String,
            required: true,
        },
        parts: [
            {
                partText: String,
                partCode: String,
                partAmount: String,
                partPrice: Number,
                partComment: String,
            },
        ],
        serviceWorks: [
            {
                serviceText: String,
                serviceFee: Number,
                serviceLocation: String,
                serviceComment: String,
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
        },
        totalFee: {
            type: Number,
            required: true,
        },
        totalCost: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
