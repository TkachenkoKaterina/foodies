import { Schema, model } from 'mongoose';

const testimonialSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        testimonial: {
            type: String,
            required: [true, 'Write testimonial text'],
        }
    }
);

const Testimonial = model('Testimonial', testimonialSchema);

export default Testimonial;