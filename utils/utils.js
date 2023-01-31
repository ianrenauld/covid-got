class Utils {
  /**
   * sortByProperty() is a utility method to be used in an array .sort command to sort a JSON array based on a specific
   *                  property.
   *
   * @param {String} property
   * @returns {Number} 1 if first element of comparison is bigger than second element, -1 if smaller, 0 if same
   */
  sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) {
        return 1;
      }
      if (a[property] < b[property]) {
        return -1;
      }
      return 0;
    };
  }

  /**
   * getTopEntriesByCriteria() returns the top entries from a JSON array based on evaluation of a critera (JSON
   *                           property) being the highest. The number of top entries to return is configurable.
   *
   * @param {JSON[]} jsonData to get top entries from
   * @param {Number} numberOfTopEntries to return
   * @param {String} criteria to evaluate what is "top" (JSON property)
   * @returns {JSON[]} JSON array, reduced to include only the top number of entries based on the criteria
   */
  getTopEntriesByCriteria(jsonData, numberOfTopEntries, criteria) {
    jsonData.sort(this.sortByProperty(criteria));
    jsonData.reverse();
    return jsonData.slice(0, numberOfTopEntries);
  }
}

export default new Utils();
