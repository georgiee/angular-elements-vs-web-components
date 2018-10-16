// via https://github.com/AndrewRayCode/emoji-alphabet/blob/master/index.js

export const alphabet = {
  A: '🅰️',
  B: 'B',
  C: [ '©️', '☪️' ],
  D: '↩️',
  E: '📧',
  F: 'F',
  G: '⛽️',
  H: '♓️',
  I: 'ℹ️',
  J: '☔',
  K: 'K',
  L: '🕒',
  M: [ 'Ⓜ️', '♏️', '♍️', '〽' ],
  N: '📈',
  O: [ '🅾️', '⭕️' ],
  P: '🅿️',
  Q: 'Q',
  R: '®️',
  S: [ '💰', '⚡️' ],
  T: '✝️',
  U: '⛎',
  V: '♈️',
  W: '〰️',
  X: [ '❎', '❌', '✖️' ],
  Y: '🌱',
  Z: '💤',
  '!': [ '❗️', '❕' ],
  '?': [ '❓', '❔' ],
  '#': '#️⃣',
  '*': '*️⃣',
  '+': '➕',
  ' ': '▫️',
  0: '0️⃣',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
  8: '8️⃣',
  9: '9️⃣'
};

export function transformEmojis(text: string):string {
  let transformedText = text;
  Object.keys(alphabet).forEach(function(key) {
    let newValue = alphabet[key];

    key = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(key, 'gi');


    if (Array.isArray(newValue)) {
      newValue = newValue[0];
    }

    transformedText = transformedText.replace(regex, newValue);
  });


  return transformedText;
}