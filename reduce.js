const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];

function countCategories(arr) {
  const counts = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0]);

  return { counts, sorted };
}

console.log(countCategories(categories));
