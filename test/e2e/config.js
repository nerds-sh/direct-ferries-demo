module.exports = {
  exclude: [
    'test/e2e/nightwatch.ts',
    'test/e2e/commands',
    'test/e2e/pages',
    'test/e2e/output',
    'test/unit',
  ],
  custom_commands_path: [
    'test/e2e/commands',
  ],
  page_objects_path: [
    'test/e2e/pages',
  ],
  test_workers: false,
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515,
  },
  test_settings: {
    default: {
      globals: { appUrl: 'http://localhost:9000' },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'goog:chromeOptions': { args: [] },
      },
    },
  },
}
