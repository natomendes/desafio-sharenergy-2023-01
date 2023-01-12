export default {
  mongoUri: process.env.MONGO_URI || 'mongodb://root:123456@localhost:27017/sharenergy-db?authSource=admin',
  port: 5050,
  jwtSecret: 'sh4r3n3rgyS3cr3t'
}
