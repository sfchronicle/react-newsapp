
// Set all vars that need to be accessed based on environment here
const envConfig =  {
  production: {
    STATIC_URL: "/static/"
  },
  testing: {
    STATIC_URL: "/static/"
  },
  development: {
    STATIC_URL: "/static/"
  }
};

module.exports = envConfig[process.env.NODE_ENV];