export const config = {
  runner: "local",
  specs: [
    // './features/**/*.feature',
    "./features/**/1_login.feature",
    "./features/**/2_category.feature",
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome", // or "firefox", "microsoftedge", "safari"
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "cucumber",
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: [
        // "./features/step-definitions/*.steps.js"
        "./features/step-definitions/1_login.steps.js",
        "./features/step-definitions/2_category.steps.js"
    ],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: ["@babel/register"],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> Only execute the scenarios with name matching the expression (repeatable).
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed before a worker process is spawned and can be used to initialize specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {object} specs    specs to be run in the worker process
   * @param  {object} args     object that will be merged with the main configuration once worker is initialized
   * @param  {object} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just after a worker process has exited.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {number} exitCode 0 - success, 1 - fail
   * @param  {object} specs    specs to be run in the worker process
   * @param  {number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {string} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {object}         browser      instance of created browser/device session
   */
  //   before: function (capabilities, specs) {
  //     // Proses login
  //     browser.url('https://kasirdemo.vercel.app/login');
  //     $('#email').setValue('riezq.25@gmail.com');
  //     $('#password').setValue('password');
  //     $('[type="submit"]').click();

  //     // Verifikasi login berhasil
  //     const isLoggedIn = $('#menu-button-6').isDisplayed(); // Ganti dengan selector untuk logout atau elemen yang hanya ada saat login
  //     if (!isLoggedIn) {
  //         throw new Error('Login gagal');
  //     }
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {string}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // beforeFeature: function (uri, feature) {
  // },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
   * @param {object}                 context  Cucumber World object
   */
  // beforeScenario: function (world, context) {
  // },
  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   * @param {object}             context  Cucumber World object
   */
  // beforeStep: function (step, scenario, context) {
  // },
  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step             step data
   * @param {IPickle}            scenario         scenario pickle
   * @param {object}             result           results object containing scenario results
   * @param {boolean}            result.passed    true if scenario has passed
   * @param {string}             result.error     error stack if scenario failed
   * @param {number}             result.duration  duration of scenario in milliseconds
   * @param {object}             context          Cucumber World object
   */
  // afterStep: function (step, scenario, result, context) {
  // },
  /**
   *
   * Runs after a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
   * @param {object}                 result           results object containing scenario results
   * @param {boolean}                result.passed    true if scenario has passed
   * @param {string}                 result.error     error stack if scenario failed
   * @param {number}                 result.duration  duration of scenario in milliseconds
   * @param {object}                 context          Cucumber World object
   */
  // afterScenario: function (world, result, context) {
  // },
  /**
   *
   * Runs after a Cucumber Feature.
   * @param {string}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // afterFeature: function (uri, feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {number} result 0 - command success, 1 - command error
   * @param {object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {object} exitCode 0 - success, 1 - fail
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
   * Gets executed when a refresh happens.
   * @param {string} oldSessionId session ID of the old session
   * @param {string} newSessionId session ID of the new session
   */
  // onReload: function(oldSessionId, newSessionId) {
  // }
  /**
   * Hook that gets executed before a WebdriverIO assertion happens.
   * @param {object} params information about the assertion to be executed
   */
  // beforeAssertion: function(params) {
  // }
  /**
   * Hook that gets executed after a WebdriverIO assertion happened.
   * @param {object} params information about the assertion that was executed, including its results
   */
  // afterAssertion: function(params) {
  // }
};
