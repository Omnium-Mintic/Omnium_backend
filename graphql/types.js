import { gql } from 'apollo-server-express';
import { tiposAvance } from '../models/advancement/typeAdvance.js';
import { typesEnums } from '../models/enums/typesEnums.js';
import { tiposUsuario } from '../models/user/typesUser.js';
import { tiposProyecto } from '../models/project/typesProject.js';


const typesGlobales = gql`
  scalar Date
`;

export const types = [ typesGlobales, typesEnums, tiposUsuario, tiposAvance, tiposProyecto ];
