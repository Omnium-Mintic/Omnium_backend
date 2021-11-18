import { gql } from 'apollo-server-express';
import { typesEnums } from '../models/enums/typesEnums';
import { typesUser } from '../models/user/typesUsers';

const typesGlobales = gql`
  scalar Date
`;

export const types = [ typesGlobales, typesEnums, typesUser ];
