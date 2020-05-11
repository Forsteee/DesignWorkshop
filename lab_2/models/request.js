module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    const applicationSchema = new Schema({
        client: {
            type: Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        service: [{
            type: Schema.Types.ObjectId,
            ref: 'Service',
            required: true
        }],
    });

    return mongoose.model('Request', applicationSchema);
};