export default function canIterate(income) {
  return income != null && typeof income[Symbol.iterator] === 'function';
}
