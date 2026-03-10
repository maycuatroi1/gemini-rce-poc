function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { capitalize, randomInt };
