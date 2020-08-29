module.exports = {
  PORT: process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000,
  WORKERS: 1,
  JWT_LIFE_TIME: "7d",
  JWT_SECRET: "topLevelSecret",
  MONGO_URI: `mongodb://localhost:27017/mernGraphQLAwsEC2Boilerplate`,
};
