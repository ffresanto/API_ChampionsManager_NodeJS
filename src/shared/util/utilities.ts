export function removeAccentuation(word: string) {

  word = word.replace("´", "'");
  word = word.replace("`", "'");

  return word;
}
