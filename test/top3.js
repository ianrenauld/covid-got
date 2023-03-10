import assert from 'node:assert';
import CovidAPI from '../utils/api/covidApi.js';
import Utils from '../utils/utils.js';

const regions = ['northamerica', 'europe'];
const date = '2022-08-15';

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
        this.top3Data = Utils.getTopEntriesByCriteria(this.covidData, 3, 'TotalDeaths');

        // We definitely need to discuss philosophy of testing because this assert is not proper testing
        assert(this.top3Data.length === 3, 'Expected: Top 3 countries are returned but are not');

        // Usually you don't put code after an assert as it might not run, but this is ok now because we wouldn't want
        // to output the countries if the assert fails
        const top3Countries = this.top3Data.map((country) => country.Country);
        console.log(`Top 3 ${region} countries are: ${top3Countries}`);
      });

      // This it block is a hack because the data is dynamic and mocha doesn't allow top level async forEach
      // With more time I'd try to fix this in a cleaner way... Or just abandon the forEach while losing flexibility...
      it('', async function () {
        this.top3Data.forEach((country) => {
          describe(`C0002 - Get stats for ${country.Country} on the ${date}`, () => {
            it(`should list stats for for ${country.Country} on the ${date}`, async () => {
              const sixMonthsData = await CovidAPI.getSixMonthStatsFor(country.ThreeLetterSymbol);
              const dateStats = sixMonthsData.filter((entry) => entry.date === date);
              // Same as above, this assert needs to be discussed...
              assert(dateStats.length === 1, `Expected: ${country.Country} stats for ${date} is retrieved but is not`);
              console.log(`New cases in ${country.Country} for ${date}: ${dateStats[0].new_cases}`);
            });
          });
        });
      });
    });
  });
});
