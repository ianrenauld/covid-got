import got from 'got';

const apiKey = process.env.APIKEY;

const url = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api';

class CovidAPI {
  /**
   * getDataByRegion() gets the full COVID data for the specified region.
   *
   * @param {String} region to get COVID data from: "australia" (Oceania, really), "southamerica", "northamerica"
   *                        (includes central america as well), "europe", "africa", "asia"
   * @returns {JSON} COVID data
   * If I had more time, I would expand the JSDoc with all the fields in the response...
   */
  async getDataByRegion(region) {
    const response = await got.get(`${url}/npm-covid-data/${region}`, {
      headers: {
        'X-RapidAPI-Key': apiKey,
      },
    }).json();
    return response;
  }

  /**
   * getSixMonthStatsFor() get the stats of the last 6 months for the specified countryCode. Data is not guaranteed!
   *                       Lots of countries stopped reporting data around 6 months ago!
   *
   * @param {String} countryCode to get the stats for. This is the 3 letter ISO code
   * @returns {JSON} COVID stats
   * If I had more time, I would expand the JSDoc with all the fields in the response...
   */
  async getSixMonthStatsFor(countryCode) {
    const response = await got.get(`${url}/covid-ovid-data/sixmonth/${countryCode}`, {
      headers: {
        'X-RapidAPI-Key': apiKey,
      },
    }).json();
    return response;
  }
}

export default new CovidAPI();
