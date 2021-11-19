
import { resolversAvance } from '../models/advancement/resolversAdvance.js';
import { resolversUsuario } from '../models/user/resolversUser.js';
import { resolversProject } from '../models/project/resolversProject.js';

export const resolvers = [ resolversUsuario, resolversAvance, resolversProject ];
