import mongoose from 'mongoose';
import { ProjectModel } from '../project/project.js';
import { UserModel } from '../user/user.js';

const { Schema, model } = mongoose;

const avanceSchema = new Schema({
   fecha: {
      type: Date,
      required: true,
   },
   descripcion: {
      type: String,
      required: true,
   },
   observaciones: [
      {
         type: String,
      },
   ],
   proyecto: {
      type: Schema.Types.ObjectId,
      ref: ProjectModel,
      required: true,
   },
   creadoPor: {
      type: Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
   },
});

const ModeloAvance = model('Advance', avanceSchema, 'Avances');

export { ModeloAvance };