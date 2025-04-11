import mongoose, { Document, Schema } from 'mongoose';

interface ICandidate extends Document {
    name: string,
    position: string,
    election: Schema.Types.ObjectId,
}
    
// Define the schema
const CandidateSchema: Schema<ICandidate> = new Schema<ICandidate>({
    name: { type: String, required: true},
    position: { type: String, required: true },
    election: { type: Schema.Types.ObjectId, ref: 'election', required: true }
    
}, { timestamps: true});
    
// Create the model
const Candidate = mongoose.model<ICandidate>('candidate', CandidateSchema);

export default Candidate;
