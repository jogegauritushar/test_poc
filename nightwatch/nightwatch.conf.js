const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'hooks.js',
        '--require', 'timeout.js',
        '--require', 'features/step-definitions/',
        '--format', 'pretty',
        '--format', 'json:reports_dir/cucumber.json',
        'features'
    ]
});

module.exports = {
    output_folder: 'reports',
    custom_assertions_path: '',
    page_objects_path: 'page_objects',
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 5555
    },
    // test_workers: {
    //     enabled: true,
    //     workers: "auto"

    test_settings: {
        end_session_on_fail: false,
        skip_testcases_on_fail: false,

        default: {
            launch_url: 'https://test.kurtgeiger/.com',
            selenium_port: 5555,
            selenium_host: '127.0.0.1',
            end_session_on_fail: false,
            skip_testcases_on_fail: false,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: "reports/screenshots"
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless'],
                    binary: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',

                    //javascriptEnabled: true,
                    acceptSslCerts: true
                    //'phantomjs.binary.path': phantomjs.path
                }
            },

            firefox: {
                launch_url: 'https://test.kurtgeiger.com',
                screenshots: {
                    enabled: false,
                    on_failure: true,
                    on_error: true,
                    path: "reports/screenshots"
                },
                desiredCapabilities: {
                    browserName: 'firefox',
                    javascriptEnabled: true,
                    acceptSslCerts: true
                },
                selenium: {
                    cli_args: {
                        'webdriver.gecko.driver': geckodriver.path
                    }
                }
            },

            chrome: {
                launch_url: 'https:/test.kurtgeiger.com',
                screenshots: {
                    enabled: false,
                    on_failure: true,
                    on_error: true,
                    path: "reports/screenshots"
                },
                desiredCapabilities: {
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    chromeOptions: {
                        args: ["start-fullscreen"]
                    }
                },
                selenium: {
                    cli_args: {
                        'webdriver.chrome.driver': chromedriver.path
                    }
                }
            },

            saucelabs: {
                launch_url: 'https://test.kurtgeiger.com',
                selenium_port: 80,
                selenium_host: 'ondemand.saucelabs.com',
                silent: true,
                start_process: false,
                username: 'gauri.joge',
                access_key: 'c3a043ab-fae1-4798-ad63-c1d6267e7135',
                globals: {
                    "waitForConditionTimeout": 10000    // wait for content on the page before continuing
                },
                screenshots: {
                    enabled: false,
                    path: ""
                },
                desiredCapabilities: {
                    parentTunnel: 'kgteam',
                    browserName: 'chrome',
                    platform: "Windows 8",
                    version: "latest",
                    screenResolution: "1280x1024",
                    javascriptEnabled: true,
                    acceptSslCerts: true
                },
                selenium: {
                    cli_args: {
                        'webdriver.gecko.driver': geckodriver.path
                    }
                }
            }
        }
    }
};

