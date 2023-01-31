import assert from 'node:assert';
import CovidAPI from '../utils/api/covidApi.js';
import Utils from '../utils/utils.js';

const regions = ['northamerica', 'europe'];

regions.forEach((region) => {
  describe(`COVID Top Deaths test for ${region}`, () => {
    before(async function () {
      this.covidData = await CovidAPI.getDataByRegion(region);
    });

    describe(`C0001 - As a User I can get the 3 ${region} countries with highest death total`, () => {
      it(`should get all ${region} countries`, async function () {
        assert(this.covidData.length > 0, `Expected: ${region} data is received but was not`);
      });

      it(`should list top 3 ${region} countries with highest death total`, async function () {
        const top3Data = Utils.getTopEntriesByCriteria(this.covidData, 3, 'TotalDeaths');

        // We definitely need to discuss philosophy of testing because this assert is not proper testing
        assert(top3Data.length === 3, 'Expected: Top 3 countries are returned but are not');

        // Usually you don't put code after an assert as it might not run, but this is ok now because we wouldn't want
        // to output the countries if the assert fails
        const top3Countries = top3Data.map((country) => country.Country);
        console.log(`Top 3 ${region} countries are: ${top3Countries}`);
      });
    });
  });
});
