const repositories = {
    vendorRepository: require("../repositories/vendor").default,
  }
  
  const services = {
    vendorService: require("../services/vendor").default,
  }
  
  module.exports = {
    registerRepositories: (container) => {
      for (const key in repositories) {
        container.register(key, repositories[key])
      }
    },
    registerServices: (container) => {
      for (const key in services) {
        container.register(key, services[key])
      }
    },
  }
  