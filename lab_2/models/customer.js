module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    const clientSchema = new Schema({
        fio: {
            type: String,
            required: true},
        phone: {
            type: String,
            required: true},
        age: {
            type: String,
            required: true},
        adress: {
            type: String,
            required: true},
    });

    return mongoose.model('Client', clientSchema);
};