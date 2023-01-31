import got from 'got';

const apiKey = process.env.APIKEY;

const url = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data';

class CovidAPI {
  /**
   * getDataByRegion() gets the full COVID data for the specified region
   *
   * @param {String} region to get COVID data from: "australia" (Oceania, really), "southamerica", "northamerica"
   *                        (includes central america as well), "europe", "africa", "asia"
   * @returns {JSON} COVID data
   * If I had more time, I would expand the JSDoc with all the fields in the response...
   */
  async getDataByRegion(region) {
    const response = await got.get(`${url}/${region}`, {
      headers: {
        'X-RapidAPI-Key': apiKey,
      },
    }).json();
    return response;
  }
}

export default new CovidAPI();
