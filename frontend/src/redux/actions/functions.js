export const createStats = (data) => {
  let stats = {};
  for (var i = 0; i < data.length - 1; i++) {
    let initNum = stats[data[i]] || 0;
    stats[data[i]] = initNum + 1;
  }
  let sum = 0;
  Object.keys(stats).forEach((d) => {
    sum = sum + stats[d];
  });
  const ratio = 100 / sum;
  Object.keys(stats).forEach((d) => {
    stats[d] = Math.round(stats[d] * ratio);
  });
  let statsArray = [];
  Object.keys(stats).forEach((d) => {
    statsArray.push({ name: d, percentage: stats[d] });
  });
  return statsArray;
};

export const statsOthers = (data, defRange = null, length = 15) => {
  const average = (array) => array.reduce((a, b) => a + b) / array.length;

  const range =
    defRange || 10 ** ([Math.round(average(data))].toString().length - 1);
  console.log("range", range);
  console.log("data", data);
  const steps = Array.from({ length: length }, (x, i) => i * range);
  const result = steps
    .map((step) => {
      return {
        rangeStart: step,
        rangeEnd: step + range,
        count: data.filter((d) => d >= step && d < step + range).length,
      };
    })
    .filter((d) => d.count);
  console.log("result", result);
  return result;
};
