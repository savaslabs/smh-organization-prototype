import members from "../data/members";

/**
 * Return an array of members sorted alphabetically.
 */
const getResults = (searchTerm) => {
  const memberArray = Object.assign([], members);
  let results;

  // If there's a search term return relevant results, otherwise all members.
  if (!searchTerm) {
    results = memberArray;
  }
  else {
    results = memberArray.filter(function(member) {
      if (member.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return member;
      }
      return null;
    });
  }

  // Sort alphabetically.
  results.sort(function(a, b) {
    return a.lastName.localeCompare(b.lastName);
  });

  return results;
};

export default getResults;
