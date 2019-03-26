exports.config = {
  host: '127.0.0.1',
  path: '/wd/hub',
  port: 4444,
  capabilities: [
    {
      browserName: 'firefox',
      platform: 'macOS 10.13'
    }
  ],
  specs: [
    './test.js'
  ],
  services: [
    'sauce'
  ],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: true,
  region: 'us',
  reporters: [
    'spec',
    [
      'junit',
      {
        outputDir: './log'
      }
    ]
  ]
}
