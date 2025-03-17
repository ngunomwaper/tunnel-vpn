module.exports = {
  apps: [
    {
      name: 'Iron Tunnel',
      port: '3007',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {}
    }
  ]
}