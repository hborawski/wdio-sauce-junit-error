# @wdio/junit-reporter error example

This repository it to provide a minimal reproducable example of an incompatibility between `@wdio/junit-reporter` and saucelabs (illustrated by using `@wdio/sauce-service`)



## Setup

### Requirements

* NodeJS LTS: `10.15`

* Saucelabs Account

#### Install Dependencies

```sh
npm i 
```

#### Run test

```sh
SAUCE_USERNAME="your saucelabs username" SAUCE_ACCESS_KEY="your saucelabs access key" npm t
```



## Results

### Expected Behavior

Test should pass (only opens `https://google.com`) and should exit with a `0` exit code.

### Actual Behavior

Test passes, but exits with a non-zero code due to an unkown command being sent to the selenium server.

```sh
Error: GET /session/XXXXXXXX-XXXX-XXXX-XXXX-XXXX87a7c5b4/log/types did not match a known command
```



#### Example full test output

```sh
"spec" Reporter:
------------------------------------------------------------------
[firefox  macOS 10.13 #0-0] Spec: /Users/hborawski/sandbox/wdio-sauce-error/test.js
[firefox  macOS 10.13 #0-0] Running: firefox on macOS 10.13
[firefox  macOS 10.13 #0-0]
[firefox  macOS 10.13 #0-0] sample test
[firefox  macOS 10.13 #0-0]    ✓ should not fail
[firefox  macOS 10.13 #0-0]
[firefox  macOS 10.13 #0-0] 1 passing (4.4s)


Stdout:
2019-03-26T17:05:13.457Z DEBUG @wdio/utils:initialiseServices: initialise wdio service "sauce"
2019-03-26T17:05:13.549Z INFO @wdio/cli:Launcher: Run onPrepare hook
2019-03-26T17:05:33.400Z INFO @wdio/local-runner: Start worker 0-0 with arg:
[0-0] 2019-03-26T17:05:33.780Z INFO @wdio/local-runner: Run worker command: run
2019-03-26T17:05:48.602Z DEBUG @wdio/local-runner: Runner 0-0 finished with exit code 1
2019-03-26T17:05:48.604Z INFO @wdio/cli:Launcher: Run onComplete hook

Worker Error:
Error: GET /session/XXXXXXXX-XXXX-XXXX-XXXX-XXXX87a7c5b4/log/types did not match a known command
Build info: version: '3.4.0', revision: 'unknown', time: 'unknown'
System info: host: 'itako21446.prod.miso', ip: 'fe80:0:0:0:ce6:19e1:ab88:b4cd%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.13.6', java.version: '9.0.4'
Driver info: org.openqa.selenium.firefox.FirefoxDriver
Capabilities [{moz:profile=/var/folders/vl/hxyc1ht91p143px0y2f1fm3h0000kr/T/rust_mozprofile.f5vadcHvDGeV, rotatable=false, moz:geckodriverVersion=0.23.0, timeouts={implicit=0.0, pageLoad=300000.0, script=30000.0}, pageLoadStrategy=normal, unhandledPromptBehavior=dismiss and notify, strictFileInteractability=false, moz:headless=false, platform=ANY, proxy=Proxy(pac: http://127.0.0.1:19876/pac.js), moz:accessibilityChecks=false, moz:useNonSpecCompliantPointerOrigin=false, acceptInsecureCerts=false, browserVersion=65.0, moz:shutdownTimeout=60000.0, platformVersion=17.7.0, moz:processID=6468.0, browserName=firefox, javascriptEnabled=true, platformName=mac, setWindowRect=true, moz:webdriverClick=true}]
Session ID: XXXXXXXX-XXXX-XXXX-XXXX-XXXX87a7c5b4
    at getErrorFromResponseBody (/Users/hborawski/sandbox/wdio-sauce-error/node_modules/webdriver/build/utils.js:343:10)
    at Request._callback (/Users/hborawski/sandbox/wdio-sauce-error/node_modules/webdriver/build/request.js:121:64)
    at Request.self.callback (/Users/hborawski/sandbox/wdio-sauce-error/node_modules/request/request.js:185:22)
    at Request.emit (events.js:182:13)
    at Request.EventEmitter.emit (domain.js:441:20)
    at Request.<anonymous> (/Users/hborawski/sandbox/wdio-sauce-error/node_modules/request/request.js:1161:10)
    at Request.emit (events.js:182:13)
    at Request.EventEmitter.emit (domain.js:441:20)
    at IncomingMessage.<anonymous> (/Users/hborawski/sandbox/wdio-sauce-error/node_modules/request/request.js:1083:12)
    at Object.onceWrapper (events.js:273:13)

Test Suites:     0 passed, 1 failed, 1 total (100% completed)
Time:            🕘  48.88s

npm ERR! Test failed.  See above for more details.
```

