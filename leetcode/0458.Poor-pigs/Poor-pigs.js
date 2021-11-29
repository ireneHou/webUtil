/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let bucket = minutesToTest / minutesToDie + 1
  let pigs = 0
  while (buckets >= bucket) {
    pigs += 1
    buckets = buckets / bucket
  }
  if (buckets != 1) pigs++
  return pigs
};