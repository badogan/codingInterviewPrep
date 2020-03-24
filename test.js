function stringIncludes(word, letter) {
  let matches;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      matches = true;
    }
  }
  return !!matches;
}

let w = "banana";
let l = "d";
console.log("stringincludes ", stringIncludes(w, l));
//

sortString = string => {
  return string
    .split("")
    .sort()
    .join("");
};

t = "just an arbitrary stuff";
console.log("sortstring: ", sortString(t));
//

binarySearch = (string, letter) => {
  if (string === letter) {
    return true;
  }
  let startPosition = 0;
  let endPosition = string.length - 1;
  let guessPosition = parseInt((endPosition - startPosition) / 2);
  while (startPosition != endPosition) {
    console.log(
      "startPosition: ",
      startPosition,
      "endPosition: ",
      endPosition,
      "guessPosition",
      guessPosition
    );
    if (string[guessPosition] < letter) {
      console.log("too low");
      startPosition = guessPosition;
      guessPosition =
        startPosition + parseInt((endPosition - startPosition) / 2);
    } else if (string[guessPosition] > letter) {
      console.log("too high");
      endPosition = guessPosition;
      guessPosition =
        startPosition + parseInt((endPosition - startPosition) / 2);
    } else {
      console.log("jackpot!");
      return true;
    }
  }
  return false;
};

let w_2 =
  "nnnnfkgkgjgjgjgjaoaoaoaoaoaoaoaoaoaoaoaoooaoaoaaoaaoagjgkggjgkggjgukokgotkgotkgotkgotgkotkgoktgotkgoktgoktkgotglggjglgtjggkgjgnnnnnnnndddddddd";
let l_2 = "t";
binarySearch(sortString(w_2), l_2);

const printString = myString => {
  // console.log(myString[0]);
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
};

// printString(sortString(w_2))

function findOrAddNewNode(rootNode, newNode) {
  let currentNode = rootNode.data;
  if (newNode.data < currentNode) {
    currentNode = rootNode.left;
    if (currentNode) {
      findOrAddNewNode(currentNode, newNode);
    } else {
      currentNode.left = newNode;
    }
  } else if (newNode.data > currentNode) {
    currentNode = rootNode.right;
    if (currentNode) {
      findOrAddNewNode(currentNode, newNode);
    } else {
      currentNode.right = newNode;
    }
  }
}

let newNode = { data: 3, left: null, right: null };
let rootNode = { data: 4, left: null, right: null };

// findOrAddNewNode(rootNode, newNode)
// newNode == rootNode.left.right.right

let userSongs = {
  David: ["song1", "song2", "song3", "song4", "song8"],
  Emma: ["song5", "song6", "song7"]
};

let songGenres = {
  Rock: ["song1", "song3"],
  Dubstep: ["song7"],
  Techno: ["song2", "song4"],
  Pop: ["song5", "song6"],
  Jazz: ["song8", "song9"]
};
// START: 07:52
// convert songs to lookup table
const generateLookup = songGenres => {
  let lookup = {};
  for (genre in songGenres) {
    songGenres[genre].map(song => {
      lookup[song] = genre;
    });
  }
  return lookup;
};
// map over each person songs and generate genres array
const generateSongsToGenresHash = (songGenres, userSongs) => {
  let lookup = generateLookup(songGenres);
  let hash = {};
  for (user in userSongs) {
    hash[user] = [];
    userSongs[user].map(song => {
      hash[user].push(lookup[song]);
    });
  }
  return hash;
};
// process each array and create hash summarizing frequency of genres per person - output:hash
const generateFrequencyHash = arr => {
  let result = {};
  arr.map(item => {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  });
  return result;
};

// process each person to find maximum
// find genre(s) per person for that identified maximum - may be merge w/ previous step?
const returnKeysWithMaxValueInAnArray2 = hash => {
  let maxValue = Math.max(...Object.values(hash));
  let result = [];
  // returns an array
  for (const key in hash) {
    if (hash[key] == maxValue) {
      result.push(key);
    }
  }
  return result;
};
// construct main function - start after midpointish

const main2 = (songGenres, userSongs) => {
  let songsToGenresHash = generateSongsToGenresHash(songGenres, userSongs);
  let frequencyHash = {};
  for (user in songsToGenresHash) {
    frequencyHash[user] = generateFrequencyHash(songsToGenresHash[user]);
  }
  // console.log(frequencyHash);
  let answer = {};
  for (user in frequencyHash) {
    answer[user] = returnKeysWithMaxValueInAnArray2(frequencyHash[user]);
  }
  console.log(answer);
  return answer;
};

// run + test
main2(songGenres, userSongs);
// END - 08:29

const songsToGenresLookupHash = songGenres => {
  let SongsToGenresHash = {};
  for (const genre in songGenres) {
    songGenres[genre].map(song => {
      SongsToGenresHash[song] = genre;
    });
  }
  // console.log(SongsToGenresHash);
  return SongsToGenresHash;
};

// code songsToGenresLookupHash so that I can use if when I am finding the genre of a song
// code arrayToHash converting array items with hash key value pairs - key:item, value: frequency of the key in the array
// code to find the keys with maximum value OR values. 1st iteration: assume there is only one maximum

const countGenresToHash = arr => {
  let hash = {};
  arr.map(genre => {
    if (hash[genre]) {
      hash[genre] += 1;
    } else {
      hash[genre] = 1;
    }
  });
  return hash;
};

const returnKeysWithMaxValueInAnArray = hash => {
  let maxValue = Math.max(...Object.values(hash));
  let result = [];
  // returns an array
  for (const key in hash) {
    if (hash[key] == maxValue) {
      result.push(key);
    }
  }
  return result;
};

const main = (userSongs, songGenres) => {
  let userSongsInGenres = {};
  let userGenres = [];
  let songsLookup = songsToGenresLookupHash(songGenres);

  Object.keys(userSongs).map(user => {
    userGenres = [];
    userSongs[user].map(song => {
      userGenres.push(songsLookup[song]);
    });
    userSongsInGenres[user] = returnKeysWithMaxValueInAnArray(
      countGenresToHash(userGenres)
    );
  });
  return userSongsInGenres;
};

// console.log(main(userSongs, songGenres));

const aVar = 200;
const getSecret = secret => {
  const get = () => secret + aVar;
  const give = () => secret * 2;
  const lotsOfConsoleLogs = () => {
    for (let i = 0; i < secret; i++) {
      console.log("Basri");
    }
  };
  return { get, give, lotsOfConsoleLogs };
};

//
let testingValue = 2;
let obj10;
while (testingValue > 0) {
  obj10 = Object.assign({ a: 111 }, getSecret(testingValue));
  console.log("obj10: ", obj10);
  console.log("obj10.give():", obj10.give());
  testingValue -= 5;
}
//
const wait = time => new Promise(resolve => setTimeout(resolve, time));
wait(1000).then(() => {
  getSecret(1).lotsOfConsoleLogs();
});

let Students = [
  { rollNo: 21, name: "Alpha", prizesWon: 1 },
  { rollNo: 22, name: "Beta", prizesWon: 3 },
  { rollNo: 23, name: "Gamma", prizesWon: 0 },
  { rollNo: 24, name: "Delta", prizesWon: 0 },
  { rollNo: 25, name: "Omega", prizesWon: 1 }
];

const StudentRollNo = Students.map(student => student.rollNo);
console.log("map: ", StudentRollNo);
const PrizesWon = Students.reduce((sum, student) => sum + student.prizesWon, 0);
console.log("reduce: ", PrizesWon);
let maxValue2 = Math.max(...[...Students].map(s => s.prizesWon));
console.log("maxValue2: ", maxValue2);
const achievers = Students.find(student => student.prizesWon == maxValue2);
console.log("achievers: ", achievers);
const someStudents = Students.filter(student => student.prizesWon == 1);
console.log("some Students ", someStudents);

isPalindrome = str => {
  let testReversed = str
    .split("")
    .reverse()
    .join("");
  console.log("testReversed: ", testReversed);
  console.log("str: ", str);
  return str === testReversed;
};

let testString = "level2";
console.log("isPalindrome(testString)", isPalindrome(testString));
console.log("testString: ", testString);

const sortString2 = string =>
  string
    .split("")
    .sort()
    .join("");

const binarySearch2 = (string, target) => {
  let startPosition = 0;
  let endPosition = string.length - 1;
  let guessPosition = parseInt((endPosition - startPosition) / 2);
  while (startPosition != endPosition) {
    if (string[guessPosition] < target) {
      console.log("too low");
      startPosition = guessPosition;
      guessPosition =
        startPosition + Math.round((endPosition - startPosition) / 2);
    } else if (string[guessPosition] > target) {
      console.log("too high");
      endPosition = guessPosition;
      guessPosition =
        startPosition + parseInt((endPosition - startPosition) / 2);
    } else {
      console.log("just right");
      return true;
    }
  }
  if (string == target) {
    console.log("found it");
    return true;
  } else {
    console.log("not here!");
    return false;
  }
};

// binarySearch2(sortString2('banarururstringzurururuurururururururuururururbddgdhddgddjsgssna'),'d')

const reverseString2 = string => {
  let result = [];
  result.push(string[string.length - 1]);
  if (string.length > 1) {
    let mySubString = string.substring(0, string.length - 1);
    reverseString2(mySubString);
  } else {
    console.log(result);
    return true;
  }
};

const lastChar = string => {
  return string[string.length - 1];
};

const reverseInAnArray = string => {
  while (string.length > 0) {
    return reverseInAnArray(string.substring(0, string.length - 1));
  }
};

reverseString2("Basri");

const convertToChars = l => l.split("").filter(letter => letter != "");

const convertToHashWithFreq = arrOfChars => {
  let result = {};
  for (const element of arrOfChars) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  return result;
};

const main3 = (letter, newspaper) => {
  let l = convertToChars(letter);
  let newspaperHash = convertToHashWithFreq(convertToChars(newspaper));
  for (const element of l) {
    if (newspaperHash[element] && newspaperHash[element] > 0) {
      newspaperHash[element] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

let letter2 = "letterletter";
let newspaper2 = "letter";
console.log("main3: ", main3(letter2, newspaper2));

const recursiveAddUpTo = (arr, index) => {
  if (index > 0) {
    return arr[index] + recursiveAddUpTo(arr, index - 1);
  } else {
    return arr[index];
  }
};

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9.1];
console.log(recursiveAddUpTo(testArray, 9));

const findLargestInTheArray = array =>
  array.sort((a, b) => (a > b ? -1 : 1))[0];

const findLargestInTheArray2 = array => {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), findLargestInTheArray2(array));
  }
};

const ifIncludes = (array, target) => {
  if (array.length > 0) {
    if (array.pop() == target) {
      console.log("around true");
      return true;
    } else {
      return ifIncludes(array, target);
    }
  }
  return false;
};

console.log(findLargestInTheArray2(testArray));
let testArray3 = ["a", "b", "c"];
console.log("ifincludes: ", ifIncludes(testArray3, "z"));

const findMinOfArray = arr => arr.sort((a, b) => (a > b ? 1 : -1));

const sortWithSomeEffort = arr => {
  if (arr.length > 0) {
    return Math.min(arr.pop(), sortWithSomeEffort(arr));
  } else {
    return true;
  }
};

console.log(findMinOfArray(testArray));

console.log("word[x]: ", "basri".charAt(4));

const isUnique = string => {
  let refHash = {};
  for (char of string) {
    if (refHash[char]) {
      return false;
    } else {
      refHash[char] = 1;
    }
  }
  return true;
};

const isUnique2 = string => {
  if (string.length < 128) {
    return false;
  }
  let refHash = {};
  for (char of string) {
    if (refHash[char]) {
      return false;
    } else {
      refHash[char] = 1;
    }
  }
  return true;
};

console.log("isUnique: ", isUnique("abccdefghz"));

const charsToArray = string => string.replace(" ", "").split("");
const convertArrToHashWithFreq = arr => {
  let result = {};
  for (element in arr) {
    if (result[arr[element]]) {
      result[arr[element]] += 1;
    } else {
      result[arr[element]] = 1;
    }
  }
  // console.log('result for ',arr,' is ',result)
  return result;
};

const permutation = (str1, subSetStr1) => {
  let arrStr1 = charsToArray(str1);
  let arrSubSetStr1 = charsToArray(subSetStr1);
  if (new Set(arrStr1).length < new Set(arrSubSetStr1).length) {
    return false;
  }
  let hashStr1 = convertArrToHashWithFreq(arrStr1);
  for (element in arrSubSetStr1) {
    // console.log('value of element is: ', element)
    if (
      hashStr1[arrSubSetStr1[element]] &&
      hashStr1[arrSubSetStr1[element]] > 0
    ) {
      hashStr1[arrSubSetStr1[element]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

// console.log('permutation check: ',permutation('abcdddd','abcddddd'))

const URLify = string => string.replace(/[' ']/g, "%20");

// console.log(URLify('Basri Dogan Twyford int'))

const isPalindrome2 = string =>
  string === [...string].reduce((sum, num) => num + sum);
let testing = "abceddcba";
// console.log('isPalindrome2:', isPalindrome2(testing))

const stringCompression = string => {
  let arrChars = string.split("");
  let hash = {};
  for (element in arrChars) {
    if (element == 0) {
      hash[arrChars[0]] = 1;
    } else if (arrChars[element] == arrChars[element - 1]) {
      hash[arrChars[element]] += 1;
    } else {
      hash[arrChars[element]] = 1;
    }
  }
  let compressedString = "";
  for (key in hash) {
    compressedString += `${key}${hash[key]}`;
  }
  if (compressedString.length < string.length) {
    console.log("compressedString: ", compressedString);
    return compressedString;
  } else {
    return string;
  }
};
let stringCompressionTest = "abccccccccccccde";
console.log(stringCompression(stringCompressionTest));

const patternSearch = (text, pattern) => {
  let patternArray = pattern.split("");
  let textArray = text.split("");
  let indicesWithTheLetter = [];
  for (let i = 0; i < textArray.length; i++) {
    textArray[i] == patternArray[0] && indicesWithTheLetter.push(i);
  }
  for (index in indicesWithTheLetter) {
    let targetPartOftext = text.slice(
      indicesWithTheLetter[index],
      indicesWithTheLetter[index] + pattern.length
    );
    if (targetPartOftext == pattern) {
      return true;
    }
  }
  return false;
};

console.log(patternSearch("Basrigoestoschool", "schol"));

const replacementCheck = (string1, string2) => {
  if (string1.length != string2.length) {
    return false;
  }
  let counter = 0;
  let arrString1 = string1.split("");
  let arrString2 = string2.split("");
  for (let i = 0; i < string1.length; i++) {
    if (arrString1[i] != arrString2[i]) {
      counter += 1;
    }
    if (counter > 1) {
      return false;
    }
  }
  return true;
};

const insertionCheck = (string1, string2) => {
  let arrString2 = string2.split("");
  if (Math.abs(string1.length - string2.length) != 1) {
    return false;
  }

  let tempArr;
  for (let i = 0; i < arrString2.length; i++) {
    tempArr = [...arrString2];
    tempArr.splice(i, 1);
    if (tempArr.reduce((sum, num) => sum + num) == string1) {
      return true;
    }
  }
  return false;
};

console.log("replacementcheck: ", replacementCheck("abfde", "abffe"));
console.log("insertioncheck: ", insertionCheck("Zenep", "Zeynep"));
let string1 = 'bae'
let string2 = 'pale'
console.log('both: ',replacementCheck(string1,string2) || insertionCheck(string1,string2) )
