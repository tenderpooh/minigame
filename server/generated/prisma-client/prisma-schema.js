module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateState {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createState(data: StateCreateInput!): State!
  updateState(data: StateUpdateInput!, where: StateWhereUniqueInput!): State
  updateManyStates(data: StateUpdateManyMutationInput!, where: StateWhereInput): BatchPayload!
  upsertState(where: StateWhereUniqueInput!, create: StateCreateInput!, update: StateUpdateInput!): State!
  deleteState(where: StateWhereUniqueInput!): State
  deleteManyStates(where: StateWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  state(where: StateWhereUniqueInput!): State
  states(where: StateWhereInput, orderBy: StateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [State]!
  statesConnection(where: StateWhereInput, orderBy: StateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StateConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type State {
  id: ID!
  time: Int!
}

type StateConnection {
  pageInfo: PageInfo!
  edges: [StateEdge]!
  aggregate: AggregateState!
}

input StateCreateInput {
  id: ID
  time: Int!
}

type StateEdge {
  node: State!
  cursor: String!
}

enum StateOrderByInput {
  id_ASC
  id_DESC
  time_ASC
  time_DESC
}

type StatePreviousValues {
  id: ID!
  time: Int!
}

type StateSubscriptionPayload {
  mutation: MutationType!
  node: State
  updatedFields: [String!]
  previousValues: StatePreviousValues
}

input StateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StateWhereInput
  AND: [StateSubscriptionWhereInput!]
  OR: [StateSubscriptionWhereInput!]
  NOT: [StateSubscriptionWhereInput!]
}

input StateUpdateInput {
  time: Int
}

input StateUpdateManyMutationInput {
  time: Int
}

input StateWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  time: Int
  time_not: Int
  time_in: [Int!]
  time_not_in: [Int!]
  time_lt: Int
  time_lte: Int
  time_gt: Int
  time_gte: Int
  AND: [StateWhereInput!]
  OR: [StateWhereInput!]
  NOT: [StateWhereInput!]
}

input StateWhereUniqueInput {
  id: ID
}

type Subscription {
  state(where: StateSubscriptionWhereInput): StateSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  barcode: Int!
  pw: String!
  comm: String!
  name: String!
  score: Int!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  barcode: Int!
  pw: String!
  comm: String!
  name: String!
  score: Int!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  barcode_ASC
  barcode_DESC
  pw_ASC
  pw_DESC
  comm_ASC
  comm_DESC
  name_ASC
  name_DESC
  score_ASC
  score_DESC
}

type UserPreviousValues {
  id: ID!
  barcode: Int!
  pw: String!
  comm: String!
  name: String!
  score: Int!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  barcode: Int
  pw: String
  comm: String
  name: String
  score: Int
}

input UserUpdateManyMutationInput {
  barcode: Int
  pw: String
  comm: String
  name: String
  score: Int
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  barcode: Int
  barcode_not: Int
  barcode_in: [Int!]
  barcode_not_in: [Int!]
  barcode_lt: Int
  barcode_lte: Int
  barcode_gt: Int
  barcode_gte: Int
  pw: String
  pw_not: String
  pw_in: [String!]
  pw_not_in: [String!]
  pw_lt: String
  pw_lte: String
  pw_gt: String
  pw_gte: String
  pw_contains: String
  pw_not_contains: String
  pw_starts_with: String
  pw_not_starts_with: String
  pw_ends_with: String
  pw_not_ends_with: String
  comm: String
  comm_not: String
  comm_in: [String!]
  comm_not_in: [String!]
  comm_lt: String
  comm_lte: String
  comm_gt: String
  comm_gte: String
  comm_contains: String
  comm_not_contains: String
  comm_starts_with: String
  comm_not_starts_with: String
  comm_ends_with: String
  comm_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  score: Int
  score_not: Int
  score_in: [Int!]
  score_not_in: [Int!]
  score_lt: Int
  score_lte: Int
  score_gt: Int
  score_gte: Int
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  barcode: Int
  name: String
}
`
      }
    