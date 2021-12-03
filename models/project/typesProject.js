import { gql } from "apollo-server-express";

const typesProject = gql`
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  input editProyecto {
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
  }
  input editObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }
  type Query {
    Proyectos: [Proyecto]
  }
  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date
      fechaFin: Date
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto
    editarProyecto(
      _id: String!
      nombre: String
      presupuesto: Float
      fase: Enum_FaseProyecto
      estado: Enum_EstadoProyecto
    ): Proyecto
    crearObjetivo(idProyecto: String!, campos: crearObjetivo!): Proyecto
    editarObjetivo(
      idProyecto: String!
      indexObjetivo: Int!
      campos: editObjetivo
    ): Proyecto
    eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto
  }
`;

export { typesProject };