module.exports = {
    apps : [{
      name: "Api Corrente do Bem:3006",
      script: "src/index.js",
      node_args: "--es-module-specifier-resolution=node",
      interpreter: "/home/ubuntu/.nvm/versions/node/v14.15.2/bin/node",
      env: {
        NODE_ENV: "local",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }