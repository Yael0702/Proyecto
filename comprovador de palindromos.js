function palindrome(str) {
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = alphanumericStr.split("").reverse().join("");

  return alphanumericStr === reversedStr;
}

console.log(palindrome("eye"));
