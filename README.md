# COVID 'Got' Automation

API Testing framework based on [Mocha](https://mochajs.org) and [Got](https://github.com/sindresorhus/got) to test [COVID API](https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker).

## Getting started

Clone the repo on your local machine.

You need [Node.js](https://nodejs.org) to run the whole thing. Install the LTS version of Node.js and then, inside the cloned project folder, run `npm install`.

## Running tests

Tests are located in the `test` directory. To run a specific test:

```bash
npx mocha <path_and_filename_to_test_file>
```

You can also run all the tests by not specifying any path/filename.  You can do the same by running `npm test`.

### API Key

The COVID API under test requires a valid API Key. You can get one by going to the [COVID API website](https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker).

The tests expect the API Key to be provided in the APIKEY environment variable:

```bash
export APIKEY=<your_api_key_here>
```

You can skip that `export` by using this shortcut:

```bash
APIKEY=<your_api_key_here> npm test
```
