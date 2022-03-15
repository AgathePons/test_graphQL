module.exports = `
  type Query {
    "1st method to test"
    test(name: String, greeting: String): String
    members: [Member]
    membersByFamily(name: String!): [Member]
    families: [Family]
  }

  type Member {
    id: Int
    name: String
    family: Family
  }

  type Family {
    name: String
    description: String
    members: [Member]
  }
`;