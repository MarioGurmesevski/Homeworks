import { Schema, model } from 'mongoose';

const zooKeeperSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: 5
    },
    age: {
        type: Number,
        min: [18, 'Age must be greater than 18'],
        max: 110,
        required: [true, 'Age is required']
    },
    location: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

const Zookeeper = model('Zookeeper', zooKeeperSchema);


export default Zookeeper;