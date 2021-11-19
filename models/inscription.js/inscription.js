import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const inscriptionSchema = new Schema<inscription>({

    project: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
    estado: {
        type: String,
        enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
        default: 'PENDIENTE',
        required: true,
    },
    startdate: {
        type: Date,
        required: false,
    },
    finishdate: {
        type: Date,
        required: false,
    }, 
    });
    
    const InscriptionModel = model('Inscripcion', inscriptionSchema, 'inscripciones');
    
    export { InscriptionModel };