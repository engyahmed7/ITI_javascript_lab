// 1)
function compareObjects(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key in keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

let obj1 = {
  name: "John",
  age: 25,
};

let obj2 = {
  name: "John",
  age: 25,
};

console.log(compareObjects(obj1, obj2));

// 2)

function copyToClipboard() {
  let text = document.getElementById("myInput").value;
  navigator.clipboard.writeText(text);
  alert("Copied the text: " + text);
}

// 3)

function csvToArray(csv, delimiter = ",") {
  return csv.split("\n").map((row) => row.split(delimiter));
}

const csvString = `engy,ahmed,1
merna,ahmed,2
tala,ahmed,3`;
console.log(csvToArray(csvString));

// 4)

function csvTo2DArrayOfObj(csv, delimiter = ",") {
  const titles = csv.split("\n")[0].split(delimiter);
  const rows = csv.split("\n").slice(1);

  const res = rows.map((row) => {
    const obj = {};
    row.split(delimiter).forEach((value, index) => {
      obj[titles[index]] = value;
    });
    return obj;
  });
  return res;
}

console.log(csvTo2DArrayOfObj(csvString));

// 5)
const array = [
  { name: "engy", age: 23 },
  { name: "ahmed", age: 24 },
];

function arrayToCsv(arr, columns, delimiter = ",") {
  return array
    .map((row) => {
      return columns.map((col) => row[col]).join(delimiter);
    })
    .join("\n");
}

console.log(arrayToCsv(arr, ["name", "age"]));

// 6)

function findValue(obj, key) {
  if (obj[key] !== undefined) {
    return obj[key];
  }
  for (let k in obj) {
    if (typeof obj[k] === "object") {
      const nestedValue = findValue(obj[k], key);
      if (nestedValue !== undefined) {
        return nestedValue;
      }
    }
  }
}

const data = {
  level1: {
    level2: {
      level3: "value",
    },
  },
};

console.log(findValue(data, "level3"));

// 7)
function numberToArray(num) {
  return num
    .toString()
    .split("")
    .map((num) => parseInt(num));
}

console.log(numberToArray(12345));

//8)

function filterValuesFromArray(arr, values) {
  return arr.filter((value) => !values.includes(value));
}

const arr11 = [1, 2, 3, 4, 5];
const values11 = [2, 4];
console.log(filterValuesFromArray(arr11, values11));

// 9)

function allCombinations(arr) {
  return arr.reduce(
    (acc, current) => {
      return acc.concat(
        acc.map((c) => {
          return [current].concat(c);
        })
      );
    },
    [[]]
  );
}

const numbers = [1, 2, 3, 4];
const combinations = allCombinations(numbers);
console.log(combinations);

// 10)

const extractValues = (arr, indexes) => {
  return indexes.map((index) => arr[index]);
};

const arr12 = ["a", "b", "c", "d"];
const index = [1, 3];
console.log(extractValues(arr12, index));

// 11)

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

console.log(randomHexColor());

// 12) 

function removeNonPrintableChars(str) {
  return str.replace(/[^\x20-\x7E]/g, '')
}

const inputString1 = "äÄçÇéÉêhelloöwÖorlÐþúÚd";
const cleanString = removeNonPrintableChars(inputString1);
console.log(cleanString);

// 13)  

function stringToBytes(str) {
    return new Blob([str]).size;
    }

    const inputString = "hello";
    const bytes = stringToBytes(inputString);
    console.log(bytes);

// 14)

function replaceKeysName(obj, values) {
  let keys = Object.keys(obj);
  console.log(keys);
  let results={};

  keys.forEach((key) => {
    results[values[key]] = obj[key];
  });
  return results;
}

const obj = {
  name: "John",
  age: 25,
};
const values = {
  name: "NewName",
  age: "Newage",
};
console.log(replaceKeysName(obj, values));

// 15)

function MinMax (arr, compareNumbers) {
    let min,max;
    min=max=arr[0];
    let res={};
    arr.forEach(element=>{
        if(compareNumbers(element, max) >0){
            max=element;
        }
        if(compareNumbers(element, min) <0){
            min=element;
        }
    });

    res['max']=max;
    res['min']=min;

    return res;
}

function compareNumbers(a, b) {
    return a - b;
}

const arrVal=[17, 23, 3, 44, 20, 88];
let max=MinMax(arrVal,compareNumbers)['max'];
let min=MinMax(arrVal,compareNumbers)['min'];
console.log("The min is: " +  min);
console.log("The max is: " +  max);

// 16)

function allElements(arr, predicate) {
    return arr.every(predicate);
}

const arr13 = [1, 2, 3, 4, 5];
const predicate = (x) => x > 0;
console.log(allElements(arr, predicate));

// 17)

const splitValues = (arr1, arr2, filterArray) => {
    let res = [
        [],
        []
    ];
    filterArray.forEach((element, index) => {
        if (element) {
            res[0].push(arr1[index]);
            res[0].push(arr2[index]);
        } else {
            res[1].push(arr1[index]);
            res[1].push(arr2[index]);
        }
    });

    return res;
}

const arr1 = [1, 2, 3];
const arr2 = [6, 7, 8];
const filterArray = [true, false, true];
console.log(splitValues(arr1, arr2, filterArray));

// 18)

const removeFromLeft = (arr, count) => {
  for (let i = 0; i < count; i++) {
    arr.shift();
  }
  return arr;
};

const arr14 = [1, 2, 3, 4, 5];
console.log(removeFromLeft(arr, 2));

// 19)

const removeFromRight= (arr, count) =>{
    for (let i = 0; i < count; i++) {
        arr.pop();
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(removeFromRight(arr, 2));

// 20)

const extendDigits = (hexaDigits) => {
    let removeHash=hexaDigits.slice(1);
    //console.log(Array.from(removeHash).map((digit) => digit + digit).join(''));
    let newHexaDigit=`#${Array.from(removeHash).map((digit) => digit + digit).join('')}`;

    return newHexaDigit;
};

console.log(extendDigits("#efd"));


// 21
const every_nth_21 = (arr_21, nth_21) => arr_21.filter((e_21) => e_21 % nth_21 === 0);

console.log(every_nth_21([1, 2, 3, 4, 5, 6], 2));
console.log(every_nth_21([1, 2, 3, 4, 5, 6], 3));

// 22
const filterNonUniqueValues_22 = (arr_22) => {
  return arr_22.filter((value_22, index_22, array_22) => array_22.indexOf(value_22) === index_22);
};

const array_22 = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(filterNonUniqueValues_22(array_22));

// 23
const filterNonUniqueValuesWithComparator_23 = (arr_23, comparator_23) => {
  return arr_23.filter((v_23, i_23) =>
    arr_23.every((x_23, j_23) => (i_23 === j_23) === comparator_23(v_23, x_23, i_23, j_23))
  );
};

console.log(
  filterNonUniqueValuesWithComparator_23(
    [
      { id_23: 0, value_23: "a" },
      { id_23: 1, value_23: "b" },
      { id_23: 2, value_23: "c" },
      { id_23: 1, value_23: "d" },
      { id_23: 0, value_23: "e" },
    ],
    (a_23, b_23) => a_23.id_23 == b_23.id_23
  )
);

// 24
const decapitalizeFirstLetter_24 = (str_24) => {
  return str_24.charAt(0).toLowerCase() + str_24.slice(1);
};

const decapitalizedString_24 = decapitalizeFirstLetter_24("Hello World");
console.log(decapitalizedString_24);

// 25
const createPairs_25 = (a_25, b_25) =>
  a_25.reduce((acc_25, x_25) => acc_25.concat(b_25.map((y_25) => [x_25, y_25])), []);

console.log(createPairs_25([1, 2], ["a", "b"]));

// 26
function checkYesOrNo_26(str_26) {
  return /^(y|yes)$/i.test(str_26);
}

const userInput_26 = "Yes";
const result_26 = checkYesOrNo_26(userInput_26) ? true : false;
console.log(result_26);

// 27
const findCommonElements_27 = (a_27, b_27, comparator_27) =>
  Array.from(
    new Set([
      ...a_27,
      ...b_27.filter((x_27) => a_27.findIndex((y_27) => comparator_27(x_27, y_27)) === -1),
    ])
  );

console.log(
  findCommonElements_27(
    [1, 2, 3],
    [3, 4, 5],
    (a_27, b_27) => Math.round(a_27) === Math.round(b_27)
  )
);

// 28
const time_taken_28 = (callback_28) => {
  const result_28 = callback_28();
  return result_28;
};

console.log("Time taken: " + time_taken_28(() => Math.sqrt(225)) + " ms");

// 29
const toSafeInteger_29 = (num_29) =>
  Math.round(
    Math.max(Math.min(num_29, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );

console.log(toSafeInteger_29("5.52"));

// 30
const filterArrayByValues_30 = (arr_30, ...args_30) =>
  arr_30.filter((v_30) => !args_30.includes(v_30));

console.log(filterArrayByValues_30([2, 1, 2, 3], 1, 2));

// 31
const getArrayExceptFirst_31 = (arr_31) => {
  if (arr_31.length === 1) {
    return arr_31;
  } else {
    return arr_31.slice(1);
  }
};

const array_31 = [1, 2, 3, 4, 5];
console.log(getArrayExceptFirst_31(array_31));
  
  /*-------------------------------32-------------------------------*/
  {
    const sumWithMapping = (arr, mappingFunc) => {
      return arr.map(mappingFunc).reduce((acc, val) => acc + val, 0);
    };
  
     
    const array = [1, 2, 3, 4, 5];
    const mappingFunction = (num) => num * 2;
    console.log(sumWithMapping(array, mappingFunction));
  }
  
  /*-------------------------------33-------------------------------*/
  {
    const getRandomNumberInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };
  
     
    console.log(getRandomNumberInRange(10, 20));
  }
  
  /*-------------------------------34-------------------------------*/
  {
    const getRandomIntegerInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
     
    console.log(getRandomIntegerInRange(10, 20));
  }
  
  /*-------------------------------35-------------------------------*/
  {
    const getRandomIntegerInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    const getRandomIntegers = (n, min, max) => {
      const result = [];
      for (let i = 0; i < n; i++) {
        result.push(getRandomIntegerInRange(min, max));
      }
      return result;
    };
  
     
    console.log(getRandomIntegers(5, 10, 20));
  }
  
  /*-------------------------------36-------------------------------*/
  {
    const invokeFunctions = (...funcs) => {
      return funcs.map((func) => func());
    };
  
     
    const add = (a, b) => {
      return a + b;
    };
  
    const subtract = (a, b) => {
      return a - b;
    };
  
    const result = invokeFunctions(
      () => add(3, 5),
      () => subtract(10, 7)
    );
    console.log(result);
  }
  
  /*-------------------------------37-------------------------------*/
  {
    const sortByProperty = (arr, prop, order = "asc") => {
      const sortOrder = order === "asc" ? 1 : -1;
      return arr.sort((a, b) => (a[prop] - b[prop]) * sortOrder);
    };
  
    const data = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Doe", age: 20 },
    ];
  
     
    const sortedData = sortByProperty(data, "age", "asc");
    console.log(sortedData);
  }
  
  /*-------------------------------38-------------------------------*/
  {
    const padString = (str, length, char = " ") => {
      if (str.length >= length) return str;
      const paddingLength = length - str.length;
      const padding = char
        .repeat(Math.ceil(paddingLength / char.length))
        .substring(0, paddingLength);
      return padding + str + padding;
    };
  
     
    const paddedStr = padString("hello", 10, "*");
    console.log(paddedStr);
  }
  
  /*-------------------------------39-------------------------------*/
  {
    const removeKeys = (obj, keys) => {
      const newObj = { ...obj };
      keys.forEach((key) => delete newObj[key]);
      return newObj;
    };
  
     
    const obj = { a: 1, b: 2, c: 3 };
    const updatedObj = removeKeys(obj, ["a", "c"]);
    console.log(updatedObj);
  }
  
  /*-------------------------------40-------------------------------*/
  {
    const keyValuePairsToArray = (obj) => {
      return Object.entries(obj);
    };
  
     
    const obj = { a: 1, b: 2, c: 3 };
    const keyValueArray = keyValuePairsToArray(obj);
    console.log(keyValueArray);
  }
  
  /*-------------------------------41-------------------------------*/
  {
    const createObjectFromPairs = (pairs) => {
      return Object.fromEntries(pairs);
    };
  
     
    const pairs = [
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ];
    const newObj = createObjectFromPairs(pairs);
    console.log(newObj);
  }
  
  /*-------------------------------42-------------------------------*/
  {
    const coalesce = (validateFn, ...args) => {
      return args.find((arg) => validateFn(arg));
    };
  
     
    const isValid = (val) => val !== undefined && val !== null;
    const result = coalesce(isValid, null, undefined, 0, "", "hello");
    console.log(result);
  }
  
// 43
  {
    const variadicFunction = (fn) => {
      return (...args) => {
        return fn(args);
      };
    };
  
     
    const sum = (nums) => nums.reduce((acc, val) => acc + val, 0);
    const variadicSum = variadicFunction(sum);
    console.log(variadicSum(1, 2, 3, 4));
  }
  
  // 44
  {
    const removeFalseValues = (arr) => {
      return arr.filter(Boolean);
    };
  
     
    const data = [0, 1, false, true, "", "hello", null, undefined];
    const filteredData = removeFalseValues(data);
    console.log(filteredData);
  }
  
  // 45
  {
    const splitIntoGroups = (arr, filterFn) => {
      return arr.reduce(
        (result, current) => {
          result[filterFn(current) ? 0 : 1].push(current);
          return result;
        },
        [[], []]
      );
    };
  
     
    const data = [1, 2, 3, 4, 5, 6];
    const isEven = (num) => num % 2 === 0;
    const groupedData = splitIntoGroups(data, isEven);
    console.log(groupedData);
  }
  
  // 46
  {
    const curry = (fn) => {
      return function curried(...args) {
        if (args.length >= fn.length) {
          return fn(...args);
        } else {
          return function (...moreArgs) {
            return curried(...args, ...moreArgs);
          };
        }
      };
    };
  
     
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);
    console.log(curriedAdd(1)(2)(3));
  }
  
  //47
  {
    const deepCompare = (a, b) => {
      if (a === b) return true;
      if (
        typeof a !== "object" ||
        typeof b !== "object" ||
        a === null ||
        b === null
      )
        return false;
  
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
  
      if (keysA.length !== keysB.length) return false;
  
      for (let key of keysA) {
        if (!keysB.includes(key) || !deepCompare(a[key], b[key])) return false;
      }
  
      return true;
    };
  
     
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { b: 1 } };
    console.log(deepCompare(obj1, obj2));
  }
  
  /// 48
  {
    const getFunctionPropertyNames = (obj, includeInherited = false) => {
      const propNames = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          propNames.push(key);
        }
      }
      if (includeInherited) {
        const proto = Object.getPrototypeOf(obj);
        if (proto !== null) {
          propNames.push(...getFunctionPropertyNames(proto, true));
        }
      }
      return propNames;
    };
  
     
    const obj = {
      method1() {},
      method2() {},
      prop1: 10,
    };
    const functionProps = getFunctionPropertyNames(obj, true);
    console.log(functionProps);
  }
  
  // 49
  {
    const getPropertiesBySelectors = (obj, selectors) => {
      const result = {};
      selectors.forEach((selector) => {
        if (obj.hasOwnProperty(selector)) {
          result[selector] = obj[selector];
        }
      });
      return result;
    };
  
     
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const selectors = ["a", "c", "e"];
    const selectedProps = getPropertiesBySelectors(obj, selectors);
    console.log(selectedProps);
  }
  
  // 50
  {
    const integerToSuffixedString = (num) => {
      const suffix = num >= 12 ? "pm" : "am";
      const hour = num > 12 ? num - 12 : num;
      return `${hour}${suffix}`;
    };
  
     
    console.log(integerToSuffixedString(10));
    console.log(integerToSuffixedString(15));
  }
  
  // 51
  {
    const getCurrentURLParameters = () => {
      const params = new URLSearchParams(window.location.search);
      const paramsObj = {};
      for (const [key, value] of params) {
        paramsObj[key] = value;
      }
      return paramsObj;
    };
  
     
    console.log(getCurrentURLParameters());
  }
  
  // 52
  {
    const groupArrayElements = (arr, fn) => {
      const result = {};
      arr.forEach((item) => {
        const key = fn(item);
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(item);
      });
      return result;
    };
  
     
    const data = [1, 2, 3, 4, 5, 6];
    const groupedData = groupArrayElements(data, (item) =>
      item % 2 === 0 ? "even" : "odd"
    );
    console.log(groupedData);
  }
  
// 53
  {
    const initialize2DArray = (rows, cols, value) => {
      return Array.from({ length: rows }, () => Array(cols).fill(value));
    };
  
     
    console.log(initialize2DArray(3, 3, 0));
  }
  
// 54
  {
    const initializeArrayWithRange = (start, end) => {
      return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    };
  
     
    console.log(initializeArrayWithRange(1, 5));
  }
  
  // 55
  {
    const joinAndNormalizeURL = (...segments) => {
      const joinedURL = segments.join("/");
      const url = new URL(joinedURL, "https://example.com");
      return url.href;
    };
  
     
    console.log(joinAndNormalizeURL("path", "to", "resource"));
  }
  
  // 56
  {
    const areAllElementsEqual = (arr) => {
      return arr.every((val) => val === arr[0]);
    };
  
     
    console.log(areAllElementsEqual([1, 1, 1, 1]));
    console.log(areAllElementsEqual([1, 2, 3, 4]));
  }
  
  // 57
  {
    const computeAverage = (arr, mapFn) => {
      const mappedValues = arr.map(mapFn);
      const sum = mappedValues.reduce((acc, val) => acc + val, 0);
      return sum / arr.length;
    };
  
     
    const data = [1, 2, 3, 4, 5];
    const average = computeAverage(data, (num) => num * 2);
    console.log(average);
  }
  
//   58
    {
    const splitValuesByPredicate = (arr, predicateFn) => {
      return arr.reduce(
        (result, current) => {
          result[predicateFn(current) ? 0 : 1].push(current);
          return result;
        },
        [[], []]
      );
    };
  
     
    const data = [1, 2, 3, 4, 5];
    const isEven = (num) => num % 2 === 0;
    const groupedData = splitValuesByPredicate(data, isEven);
    console.log(groupedData);
  }

  //59
  {
    const invokeWithContext = (fn, context, ...args) => {
      return fn.apply(context, args);
    };
  
    const context = { value: 10 };
  
    function addValue(num) {
      return this.value + num;
    }
  
     
    const result = invokeWithContext(addValue, context, 5);
    console.log(result);
  }
  
  // 60
  {
    const invokeMethodByKey = (obj, key, ...args) => {
      const method = obj[key];
      if (typeof method === "function") {
        return method.apply(obj, args);
      } else {
        throw new Error(`${key} is not a function in the object.`);
      }
    };
  
    const person = {
      name: "John",
      greet(greeting) {
        return `${greeting}, ${this.name}!`;
      },
    };
  
     
    const result = invokeMethodByKey(person, "greet", "Hello");
    console.log(result);
  }
  
  //61
  {
    const castToArray = (value) => {
      return Array.isArray(value) ? value : [value];
    };
  
    const arr1 = castToArray("hello");
    const arr2 = castToArray([1, 2, 3]);
  
     
    console.log(arr1);
    console.log(arr2);
  }
  
  // 62
const chainAsyncFunctions62 = (...fns62) => 
(initialValue62) => fns62.reduce(async (acc62, fn62) => fn62(await acc62), initialValue62);

const asyncAddOne62 = async (num62) => num62 + 1;
const asyncMultiplyByTwo62 = async (num62) => num62 * 2;

const chainedAsyncFunctions62 = chainAsyncFunctions62(
asyncAddOne62,
asyncMultiplyByTwo62
);

chainedAsyncFunctions62(3).then((result62) => {
console.log(result62);
});

// 63
const cloneRegExp63 = (regexp63) => {
const flags63 = regexp63.flags;
return new RegExp(regexp63.source, flags63);
};

const regex1_63 = /test/gi;
const regex2_63 = cloneRegExp63(regex1_63);

console.log(regex2_63);

// 64
const firstNonNullArgument64 = (...args64) => 
args64.find((arg64) => arg64 !== null && arg64 !== undefined);

const result64 = firstNonNullArgument64(null, undefined, 0, "", "hello");
console.log(result64);

// 65
const colorizeText65 = (text65, colorCode65) => 
`\x1b[${colorCode65}m${text65}\x1b[0m`;

console.log(colorizeText65("Hello, world!", 32));

// 66
const composeRight66 = (...fns66) => 
(initialValue66) => fns66.reduceRight((acc66, fn66) => fn66(acc66), initialValue66);

const addOne66 = (num66) => num66 + 1;
const multiplyByTwo66 = (num66) => num66 * 2;
const composedFn66 = composeRight66(multiplyByTwo66, addOne66);

console.log(composedFn66(3));

// 67
const composeLeft67 = (...fns67) => 
(initialValue67) => fns67.reduce((acc67, fn67) => fn67(acc67), initialValue67);

const addOne67 = (num67) => num67 + 1;
const multiplyByTwo67 = (num67) => num67 * 2;
const composedFn67 = composeLeft67(addOne67, multiplyByTwo67);

console.log(composedFn67(3));

// 68
const converge68 = (convergingFn68, ...branchingFns68) => 
(...args68) => {
  const results68 = branchingFns68.map((fn68) => fn68(...args68));
  return convergingFn68(...results68);
};

const sum68 = (...nums68) => nums68.reduce((acc68, val68) => acc68 + val68, 0);
const multiply68 = (a68, b68) => a68 * b68;
const subtract68 = (a68, b68) => a68 - b68;

const convergingFn68 = converge68(sum68, multiply68, subtract68);
console.log(convergingFn68(2, 3));

// 69
const groupByCount69 = (arr69, fn69) => 
arr69.reduce((acc69, val69) => {
  const key69 = fn69(val69);
  acc69[key69] = (acc69[key69] || 0) + 1;
  return acc69;
}, {});

const data69 = [1, 2, 3, 4, 5];
const groupCount69 = groupByCount69(data69, (num69) => num69 % 2 === 0 ? "even" : "odd");
console.log(groupCount69);

// 70
const countValueInArray70 = (arr70, value70) => 
arr70.filter((item70) => item70 === value70).length;

const data70 = [1, 2, 3, 1, 4, 1, 5];
const count70 = countValueInArray70(data70, 1);
console.log(count70);

// 71
const deepCloneObject71 = (obj71) => 
JSON.parse(JSON.stringify(obj71));

const originalObject71 = { a: 1, b: { c: 2 } };
const clonedObject71 = deepCloneObject71(originalObject71);
console.log(clonedObject71);

// 72
const detectDeviceType72 = () => {
const userAgent72 = navigator.userAgent;
if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent72)) {
  return "Mobile Device";
} else {
  return "Desktop/Laptop";
}
};

console.log(detectDeviceType72());

  // 73
const differenceWith73 = (arr1, arr2, fn73) => {
    const set73 = new Set(arr2.map(fn73));
    return arr1.filter((item73) => !set73.has(fn73(item73)));
  };
  
  const arr173 = [1, 2, 3, 4, 5];
  const arr273 = [2, 4, 6];
  const result73 = differenceWith73(arr173, arr273, (x73) => x73 * 2);
  console.log(result73);
  
  // 74
  const filterByComparator74 = (arr74, comparatorFn74) => {
    return arr74.filter(comparatorFn74);
  };
  
  const data74 = [1, 2, 3, 4, 5];
  const filteredData74 = filterByComparator74(data74, (num74) => num74 % 2 === 0);
  console.log(filteredData74);
  
  // 75
  const computeEloRatings75 = (preRatings75, kFactor75 = 32, ...results75) => {
    const newRatings75 = [];
    for (let i75 = 0; i75 < preRatings75.length; i75++) {
      const actualScore75 = results75[i75] ? 1 : 0;
      const expectedScore75 =
        1 / (1 + 10 ** ((preRatings75[i75] - preRatings75[i75 ? 0 : 1]) / 400));
      const newRating75 = preRatings75[i75] + kFactor75 * (actualScore75 - expectedScore75);
      newRatings75.push(Math.round(newRating75));
    }
    return newRatings75;
  };
  
  const ratings75 = [1200, 1300];
  const updatedRatings75 = computeEloRatings75(ratings75, 32, true, false);
  console.log(updatedRatings75);
  
  // 76
  const forEachRight76 = (arr76, callback76) => {
    for (let i76 = arr76.length - 1; i76 >= 0; i76--) {
      callback76(arr76[i76], i76, arr76);
    }
  };
  
  const numbers76 = [1, 2, 3, 4, 5];
  forEachRight76(numbers76, (num76) => console.log(num76 * 2));
  
  // 77
  const iterateObjectProperties77 = (obj77, callback77) => {
    for (let key77 in obj77) {
      if (obj77.hasOwnProperty(key77)) {
        callback77(key77, obj77[key77]);
      }
    }
  };
  
  const person77 = { name: "John", age: 30, city: "New York" };
  iterateObjectProperties77(person77, (key77, value77) =>
    console.log(`${key77}: ${value77}`)
  );
  
  // 78
  const invertObject78 = (obj78, transformFn78 = (val78) => val78) => {
    const invertedObj78 = {};
    for (let key78 in obj78) {
      if (obj78.hasOwnProperty(key78)) {
        const value78 = transformFn78(key78);
        invertedObj78[obj78[key78]] = invertedObj78[obj78[key78]]
          ? invertedObj78[obj78[key78]].concat(value78)
          : [value78];
      }
    }
    return invertedObj78;
  };
  
  const data78 = { a: 1, b: 2, c: 1 };
  const invertedData78 = invertObject78(data78, (key78) => key78.toUpperCase());
  console.log(invertedData78);
  
  // 79
  const longestIterable79 = (...args79) => {
    return args79.reduce((acc79, val79) => (val79.length > acc79.length ? val79 : acc79), []);
  };
  
  const arr179 = [1, 2, 3];
  const arr279 = [4, 5, 6, 7];
  const longest79 = longestIterable79(arr179, arr279, "hello", [8, 9]);
  console.log(longest79);
  
  // 80
  const luhnAlgorithm80 = (num80) => {
    const digits80 = `${num80}`.split("").map(Number);
    for (let i80 = digits80.length - 2; i80 >= 0; i80 -= 2) {
      digits80[i80] *= 2;
      if (digits80[i80] > 9) digits80[i80] -= 9;
    }
    const sum80 = digits80.reduce((acc80, val80) => acc80 + val80, 0);
    return sum80 % 10 === 0;
  };
  
  const creditCardNumber80 = 4111111111111111;
  console.log(luhnAlgorithm80(creditCardNumber80));
  
  // 81
  const createObjectWithKeys81 = (keysFn81, obj81) => {
    const newObj81 = {};
    for (let key81 of keysFn81(Object.keys(obj81))) {
      newObj81[key81] = obj81[key81];
    }
    return newObj81;
  };
  
  const keysFn81 = (keys81) => keys81.map((key81) => key81.toUpperCase());
  const originalObject81 = { a: 1, b: 2, c: 3 };
  const newObj81 = createObjectWithKeys81(keysFn81, originalObject81);
  console.log(newObj81);
  
  // 82
  const mapArrayToObj82 = (arr82, mappingFn82) => {
    const obj82 = {};
    arr82.forEach((item82) => (obj82[item82] = mappingFn82(item82)));
    return obj82;
  };
  
  const numbers82 = [1, 2, 3, 4];
  const mappedObj82 = mapArrayToObj82(numbers82, (num82) => num82 * num82);
  console.log(mappedObj82);
  
  // 83
  const updateStringWithFunction83 = (str83, updateFn83) => {
    return str83.split("").map(updateFn83).join("");
  };
  
  const originalStr83 = "hello";
  const updatedStr83 = updateStringWithFunction83(originalStr83, (char83) =>
    char83.toUpperCase()
  );
  console.log(updatedStr83);
  
  // 84
  const createObjectWithFunctionValues84 = (obj84, func84) => {
    const newObj84 = {};
    for (let key84 in obj84) {
      if (obj84.hasOwnProperty(key84)) {
        newObj84[key84] = func84(obj84[key84]);
      }
    }
    return newObj84;
  };
  
  const data84 = { a: 1, b: 2, c: 3 };
  const updatedData84 = createObjectWithFunctionValues84(data84, (val84) => val84 * 2);
  console.log(updatedData84);
  
  // 85
  const maskString85 = (str85, numCharsToKeep85, maskChar85 = "*") => {
    return (
      str85.slice(0, -numCharsToKeep85).replace(/./g, maskChar85) +
      str85.slice(-numCharsToKeep85)
    );
  };
  
  const originalStr85 = "1234567890";
const maskedStr85 = maskString85(originalStr85, 4, "#");
console.log(maskedStr85);

// 86
const maxAfterMapping86 = (arr86, mapFn86) => {
  return Math.max(...arr86.map(mapFn86));
};

const numbers86 = [1, 2, 3, 4, 5];
const maxSquared86 = maxAfterMapping86(numbers86, (num86) => num86 ** 2);
console.log(maxSquared86);

// 87
const getNMaxElements87 = (arr87, n87) => {
  if (n87 >= arr87.length) {
    return arr87.sort((a87, b87) => b87 - a87);
  }
  return arr87.sort((a87, b87) => b87 - a87).slice(0, n87);
};

const numbers87 = [10, 30, 50, 20, 40];
const nMax87 = getNMaxElements87(numbers87, 2);
console.log(nMax87);

// 88
const getMedian88 = (arr88) => {
  const sortedArr88 = arr88.slice().sort((a88, b88) => a88 - b88);
  const middleIndex88 = Math.floor(sortedArr88.length / 2);
  if (sortedArr88.length % 2 === 0) {
    return (sortedArr88[middleIndex88 - 1] + sortedArr88[middleIndex88]) / 2;
  } else {
    return sortedArr88[middleIndex88];
  }
};

const numbers88 = [5, 3, 8, 2, 9];
const median88 = getMedian88(numbers88);
console.log(median88);

  
 // 89
const negatePredicate89 = (predicateFn89) => {
    return (...args89) => !predicateFn89(...args89);
  };
  
  const isEven89 = (num89) => num89 % 2 === 0;
  const isOdd89 = negatePredicate89(isEven89);
  console.log(isOdd89(5));
  console.log(isOdd89(6));
  
  // 90
  const nestObjects90 = (
    flatArr90,
    parentId90 = null,
    idKey90 = "id",
    parentIdKey90 = "parentId"
  ) => {
    const nestedObj90 = {};
    flatArr90.forEach((item90) => {
      if (item90[parentIdKey90] === parentId90) {
        const children90 = nestObjects90(
          flatArr90,
          item90[idKey90],
          idKey90,
          parentIdKey90
        );
        if (Object.keys(children90).length) {
          item90.children = children90;
        }
        nestedObj90[item90[idKey90]] = item90;
      }
    });
    return nestedObj90;
  };
  
  const flatData90 = [
    { id: 1, name: "Parent 1" },
    { id: 2, name: "Child 1", parentId: 1 },
    { id: 3, name: "Child 2", parentId: 1 },
    { id: 4, name: "Parent 2" },
  ];
  const nestedData90 = nestObjects90(flatData90);
  console.log(JSON.stringify(nestedData90, null, 2));
  
  // 91
  const allFalse91 = (arr91, predicateFn91) => {
    return arr91.every((item91) => !predicateFn91(item91));
  };
  
  const numbers91 = [1, 2, 3, 4, 5];
  const isNegative91 = (num91) => num91 < 0;
  console.log(allFalse91(numbers91, isNegative91));
  
  // 92
  const getArgumentAtIndex92 = (index92, ...args92) => {
    const adjustedIndex92 = index92 < 0 ? args92.length + index92 : index92;
    return args92[adjustedIndex92];
  };
  
  console.log(getArgumentAtIndex92(-1, 1, 2, 3));
  console.log(getArgumentAtIndex92(1, "a", "b", "c"));
  
  // 93
  const removeEventListener93 = (element93, eventName93, handler93) => {
    element93.removeEventListener(eventName93, handler93);
  };
  
  const button93 = document.getElementById("myButton");
  const handleClick93 = () => {
    console.log("Button clicked");
  };
  button93.addEventListener("click", handleClick93);
  
  removeEventListener93(button93, "click", handleClick93);
  
  // 94
  const moveElementsToEnd94 = (arr94, numElements94) => {
    const movedElements94 = arr94.splice(0, numElements94);
    arr94.push(...movedElements94);
    return arr94;
  };
  
  const array94 = [1, 2, 3, 4, 5];
  const resultArray94 = moveElementsToEnd94(array94, 2);
  console.log(resultArray94);
  
  // 95
  const addEventListenerWithDelegation95 = (
    container95,
    eventName95,
    selector95,
    handler95
  ) => {
    container95.addEventListener(eventName95, (event95) => {
      if (event95.target.matches(selector95)) {
        handler95(event95);
      }
    });
  };
  
  const list95 = document.getElementById("myList");
  addEventListenerWithDelegation95(list95, "click", "li", (event95) => {
    console.log("Clicked on", event95.target.textContent);
  });
  
  // 96
  const pickKeyValuePairs96 = (obj96, keys96) => {
    return Object.fromEntries(
      Object.entries(obj96).filter(([key96]) => keys96.includes(key96))
    );
  };
  
  const data96 = { a: 1, b: 2, c: 3, d: 4 };
  const keysToPick96 = ["a", "c"];
  const pickedData96 = pickKeyValuePairs96(data96, keysToPick96);
  console.log(pickedData96);
  
  // 97
  const createObjectBasedOnFunction97 = (obj97, func97) => {
    return Object.fromEntries(
      Object.entries(obj97).filter(([key97, value97]) => func97(value97, key97))
    );
  };
  
  const data97 = { a: 1, b: 0, c: 3, d: 4 };
  const newObj97 = createObjectBasedOnFunction97(data97, (value97) => value97 % 2 === 0);
  console.log(newObj97);
  
  // 98
  const filterArrayObjects98 = (arr98, conditionFn98, keys98) => {
    return arr98.map((obj98) =>
      keys98.reduce((acc98, key98) => {
        if (conditionFn98(obj98[key98])) {
          acc98[key98] = obj98[key98];
        }
        return acc98;
      }, {})
    );
  };
  
  const data98 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 },
  ];
  const filteredData98 = filterArrayObjects98(data98, (age98) => age98 > 30, ["name"]);
  console.log(filteredData98);
  
  // 99
  const hashStringToNumber99 = (str99) => {
    let hash99 = 0;
    for (let i99 = 0; i99 < str99.length; i99++) {
      hash99 = (hash99 << 5) - hash99 + str99.charCodeAt(i99);
    }
    return Math.abs(hash99);
  };
  
  const inputString99 = "hello world";
  const hashedNumber99 = hashStringToNumber99(inputString99);
  console.log(hashedNumber99);
  
  // 100
  const groupByPosition100 = (...arrays100) => {
    const maxLength100 = Math.max(...arrays100.map((arr100) => arr100.length));
    const result100 = [];
    for (let i100 = 0; i100 < maxLength100; i100++) {
      result100.push(arrays100.map((arr100) => arr100[i100]).filter(Boolean));
    }
    return result100;
  };
  
  const array1100 = [1, 2, 3];
  const array2100 = ["a", "b"];
  const combinedArray100 = groupByPosition100(array1100, array2100, (a100, b100) => a100 + b100);
  console.log(combinedArray100);
  
  // 101
  const createObjectFromArrays101 = (keys101, values101) => {
    return Object.fromEntries(keys101.map((key101, index101) => [key101, values101[index101]]));
  };
  
  const propertyNames101 = ["name", "age", "gender"];
  const propertyValues101 = ["John Doe", 30, "Male"];
  const obj101 = createObjectFromArrays101(propertyNames101, propertyValues101);
  console.log(obj101);
  
  // 102
  {
    const groupByPosition = (...arrays) => {
      const maxLength = Math.max(...arrays.map((arr) => arr.length));
      const result = [];
      for (let i = 0; i < maxLength; i++) {
        result.push(arrays.map((arr) => arr[i]));
      }
      return result;
    };
  
    const array1 = [1, 2, 3];
    const array2 = ["a", "b", "c"];
    const combinedArray = groupByPosition(array1, array2);
    console.log(combinedArray);
  }
  
  // 103
  const stringToArrayOfWords103 = (str103) => {
    return str103.split(/\s+/).filter(Boolean);
  };
  
  const sentence103 = "Hello world, how are you?";
  const wordsArray103 = stringToArrayOfWords103(sentence103);
  console.log(wordsArray103);
  
  // 104
  const testValueWithPredicate104 = (value104, predicateFn104, fn104) => {
    return predicateFn104(value104) ? fn104(value104) : value104;
  };
  
  const value104 = 5;
  const isEven104 = (num104) => num104 % 2 === 0;
  const result104 = testValueWithPredicate104(value104, isEven104, (num104) => num104 * 2);
  console.log(result104);
  
  // 105
  const isNumber105 = (value105) => typeof value105 === "number" && !isNaN(value105);
  
  console.log(isNumber105(5));
  console.log(isNumber105("hello"));
  
  // 106
  const ungroupAndApply106 = (arr106, fn106) => {
    return arr106.flatMap((subArr106) => subArr106.map(fn106));
  };
  
  const groupedArray106 = [[1, 2], [3, 4, 5], [6]];
  const ungroupedArray106 = ungroupAndApply106(groupedArray106, (num106) => num106 * 2);
  console.log(ungroupedArray106);
  
  
//   107
  {
    const distinctValuesFromRight = (arr, comparatorFn) => {
      const result = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        if (!result.some((item) => comparatorFn(item, arr[i]))) {
          result.unshift(arr[i]);
        }
      }
      return result;
    };

    const array = [1, 2, 3, 2, 4, 5, 3];
    const distinctArray = distinctValuesFromRight(array, (a, b) => a === b);
    console.log(distinctArray);
  }
  
  // 108
  {
    const getUniqueValuesWithComparator = (arr, comparatorFn) => {
      return arr.filter((value, index, self) => {
        return self.findIndex((item) => comparatorFn(item, value)) === index;
      });
    };
  
     
    const numbers = [1, 2, 3, 4, 5, 6];
    const uniqueNumbers = getUniqueValuesWithComparator(
      numbers,
      (a, b) => a % 2 === b % 2
    );
    console.log(uniqueNumbers);
  }
  
//   109
  {
    const getNthElement = (arr, n) => {
      return n >= 0 ? arr[n] : arr[arr.length + n];
    };
  
     
    const numbers = [10, 20, 30, 40, 50];
    console.log(getNthElement(numbers, 2));
    console.log(getNthElement(numbers, -1));
  }
  
  // 110
  {
    const getElementsFromTwoArrays = (arr1, arr2) => {
      return [...new Set([...arr1, ...arr2])];
    };
  
     
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    console.log(getElementsFromTwoArrays(arr1, arr2));
  }
  
  /*-------------------------------111-------------------------------*/
  {
    const buildArray = (iteratorFn, seedValue, size) => {
      const result = [];
      let current = seedValue;
      for (let i = 0; i < size; i++) {
        result.push(current);
        current = iteratorFn(current);
      }
      return result;
    };
  
     
    const multiplyByTwo = (num) => num * 2;
    console.log(buildArray(multiplyByTwo, 1, 5));
  }
  
  /*-------------------------------112-------------------------------*/
  {
    const unflattenObject = (obj) => {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        const keys = key.split(".");
        let nested = acc;
        for (let i = 0; i < keys.length - 1; i++) {
          const currentKey = keys[i];
          nested[currentKey] = nested[currentKey] || {};
          nested = nested[currentKey];
        }
        nested[keys[keys.length - 1]] = value;
        return acc;
      }, {});
    };
  
     
    const flattenedObject = {
      "a.b.c": 1,
      "a.d.e": 2,
      f: 3,
    };
    console.log(unflattenObject(flattenedObject));
  }
  
  // 113
  {
    const unescapeHTML = (str) => {
      const div = document.createElement("div");
      div.innerHTML = str;
      return div.textContent || div.innerText || "";
    };
  
     
    const escapedString = "&lt;p&gt;Hello &amp; world!&lt;/p&gt;";
    console.log(unescapeHTML(escapedString));
  }
  
//  114
  {
    const uncurry = (fn, depth = 1) => {
      return (...args) => {
        let currentFn = fn;
        for (let i = 0; i < depth; i++) {
          currentFn = currentFn(args[i]);
        }
        return currentFn;
      };
    };
  
     
    const add = (a) => (b) => (c) => a + b + c;
    const uncurriedAdd = uncurry(add, 3);
    console.log(uncurriedAdd(1, 2, 3));
  }
  
  // 115
  {
    const createFunctionIgnoringArgs = (fn) => {
      return (...args) => fn(args[0]);
    };
  
     
    const printFirstArg = (arg) => {
      console.log(arg);
    };
    const printFirst = createFunctionIgnoringArgs(printFirstArg);
    printFirst(1, 2, 3);
  }
  
//   116
  {
    const checkPredicateForAllElements = (collection, predicate) => {
      return collection.every(predicate);
    };
  
     
    const numbers = [2, 4, 6, 8, 10];
    const isEven = (num) => num % 2 === 0;
    console.log(checkPredicateForAllElements(numbers, isEven));
  }
  
  // 117
  {
    const truncateString = (str, maxLength) => {
      return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };
  
     
    const longString = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
    console.log(truncateString(longString, 20));
  }
  
//   118
  {
    const applyFunctionToObjectKeys = (obj, fn, accumulator) => {
      for (let key in obj) {
        accumulator = fn(accumulator, obj[key], key);
      }
      return accumulator;
    };
  
     
    const sumValues = (acc, value) => acc + value;
    const numbers = { a: 1, b: 2, c: 3 };
    console.log(applyFunctionToObjectKeys(numbers, sumValues, 0));
  }
  
//   119
  {
    const getTomorrowDate = () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toDateString();
    };
  
     
    console.log(getTomorrowDate());
  }
  
//   120
  {
    const convertToSnakeCase = (str) => {
      return str.replace(/\s+/g, "_").toLowerCase();
    };
  
     
    const sentence = "Convert This String To Snake Case";
    console.log(convertToSnakeCase(sentence));
  }
  
//   121
  {
    const convertToSafeInteger = (num) => {
      return Math.round(
        Math.max(
          Math.min(Number(num), Number.MAX_SAFE_INTEGER),
          Number.MIN_SAFE_INTEGER
        )
      );
    };
  
     
    console.log(convertToSafeInteger("123"));
    console.log(convertToSafeInteger("12345678901234567890"));
  }
  
//   122 
  {
    const addOrdinalSuffix = (num) => {
      if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
      }
      switch (num % 10) {
        case 1:
          return num + "st";
        case 2:
          return num + "nd";
        case 3:
          return num + "rd";
        default:
          return num + "th";
      }
    };
  
     
    console.log(addOrdinalSuffix(1));
    console.log(addOrdinalSuffix(22));
    console.log(addOrdinalSuffix(33));
    console.log(addOrdinalSuffix(100));
  }
  
  //  123
  {
    const convertToKebabCase = (str) => {
      return str.replace(/\s+/g, "-").toLowerCase();
    };
  
     
    const sentence = "Convert This String To Kebab Case";
    console.log(convertToKebabCase(sentence));
  }
  
  //  124
  {
    const reduceArrayLikeToObject = (arrayLike, reducerFn, initialValue) => {
      return [...arrayLike].reduce(reducerFn, initialValue);
    };
  
     
    const nodeList = document.querySelectorAll("div");
    const result = reduceArrayLikeToObject(
      nodeList,
      (acc, el) => {
        acc[el.id] = el.className;
        return acc;
      },
      {}
    );
    console.log(result);
  }
  
  // 125
  {
    const convertFloatToDecimal = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  
     
    const number = 1234567890.12345;
    console.log(convertFloatToDecimal(number));
  }
  
  //  126
  {
    const formatCurrency = (number, currencySymbol) => {
      return (
        currencySymbol + number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    };
  
     
    console.log(formatCurrency(123456.789, "$"));
  }
  
  //   127
  {
    const iterateCallbackNTimes = (callback, n) => {
      for (let i = 0; i < n; i++) {
        callback();
      }
    };
  
     
    iterateCallbackNTimes(() => console.log("Hello"), 3);
  }
  
  // 128
  {
    const getRemovedElementsUntil = (arr, predicate) => {
      const removed = [];
      let index = 0;
      while (index < arr.length && !predicate(arr[index])) {
        removed.push(arr.splice(index, 1)[0]);
      }
      return removed;
    };
  
     
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const isEven = (num) => num % 2 === 0;
    console.log(getRemovedElementsUntil(numbers, isEven));
    console.log(numbers);
  }
  
  //   129
  {
    const removeElementsUntil = (arr, predicateFn) => {
      while (!predicateFn(arr[arr.length - 1])) {
        arr.pop();
      }
      return arr;
    };
  
     
    const numbers = [1, 2, 3, 4, 5];
    const isEven = (num) => num % 2 === 0;
    console.log(removeElementsUntil(numbers, isEven));
  }
  
  //  130
  {
    const removeNElementsFromEnd = (arr, n) => {
      return arr.slice(0, -n);
    };
  
     
    const numbers = [1, 2, 3, 4, 5];
    console.log(removeNElementsFromEnd(numbers, 2));
  }
  
  //  131
  {
    const removeNElementsFromBeginning = (arr, n) => {
      return arr.slice(n);
    };
  
     
    const numbers = [1, 2, 3, 4, 5];
    console.log(removeNElementsFromBeginning(numbers, 2));
  }
  
  //   132
  {
    const getSymmetricDifferenceWithComparator = (arr1, arr2, comparatorFn) => {
      const symmetricDifference = [];
      arr1.forEach((item1) => {
        if (!arr2.some((item2) => comparatorFn(item1, item2))) {
          symmetricDifference.push(item1);
        }
      });
      arr2.forEach((item2) => {
        if (!arr1.some((item1) => comparatorFn(item1, item2))) {
          symmetricDifference.push(item2);
        }
      });
      return symmetricDifference;
    };
  
     
    const numbers1 = [1, 2, 3, 4];
    const numbers2 = [3, 4, 5, 6];
    const isEven = (num1, num2) => num1 % 2 === num2 % 2;
    console.log(getSymmetricDifferenceWithComparator(numbers1, numbers2, isEven));
  }
  
  //   133
  {
    const getSymmetricDifferenceWithFunction = (arr1, arr2, func) => {
      const symmetricDifference = [];
      arr1.forEach((item1) => {
        if (!arr2.some((item2) => func(item1) === func(item2))) {
          symmetricDifference.push(item1);
        }
      });
      arr2.forEach((item2) => {
        if (!arr1.some((item1) => func(item1) === func(item2))) {
          symmetricDifference.push(item2);
        }
      });
      return symmetricDifference;
    };
  
     
    const numbers1 = [1, 2, 3, 4];
    const numbers2 = [3, 4, 5, 6];
    const square = (num) => num * num;
    console.log(getSymmetricDifferenceWithFunction(numbers1, numbers2, square));
  }
  
  //   134
  {
    const getSymmetricDifference = (arr1, arr2) => {
      const set1 = new Set(arr1);
      const set2 = new Set(arr2);
      const difference = new Set(
        [...set1]
          .filter((x) => !set2.has(x))
          .concat([...set2].filter((x) => !set1.has(x)))
      );
      return Array.from(difference);
    };
  
     
    const numbers1 = [1, 2, 3, 4];
    const numbers2 = [3, 4, 5, 6];
    console.log(getSymmetricDifference(numbers1, numbers2));
  }
  
  //   135
  {
    const getSumOfPowers = (start, end, power) => {
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += Math.pow(i, power);
      }
      return sum;
    };
  
     
    console.log(getSumOfPowers(1, 3, 2));
  }
  
  // 136
  {
    const generatePermutations = (str) => {
      if (str.length <= 1) return [str];
      const permutations = [];
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const innerPermutations = generatePermutations(remainingChars);
        for (let perm of innerPermutations) {
          permutations.push(char + perm);
        }
      }
      return permutations;
    };
  
     
    console.log(generatePermutations("abc"));
  }
  
  //   137
  {
    const stableSort = (arr, comparator) => {
      const indexedArr = arr.map((value, index) => [value, index]);
      indexedArr.sort((a, b) => {
        const result = comparator(a[0], b[0]);
        return result !== 0 ? result : a[1] - b[1];
      });
      return indexedArr.map((item) => item[0]);
    };
  
     
    const arr = [{ value: 3 }, { value: 1 }, { value: 2 }];
    const sortedArr = stableSort(arr, (a, b) => a.value - b.value);
    console.log(sortedArr);
  }
  
  //  138
  {
    const mapToFunctionInputs = (fn) => {
      return (args) => fn(...args);
    };
  
     
    const add = (a, b) => a + b;
    const mappedAdd = mapToFunctionInputs(add);
    console.log(mappedAdd([1, 2]));
  }
  
  //   139
  {
    const splitMultilineString = (str) => {
      return str.split(/\r?\n/);
    };
  
     
    const multilineStr = `Line 1
    Line 2
    Line 3`;
    console.log(splitMultilineString(multilineStr));
  }

  //  140
  {
    const sortedLastIndexBy = (arr, n, fn) => {
      const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
      const val = fn(n);
      const index = arr
        .map(fn)
        .reverse()
        .findIndex((el) => (isDescending ? val <= el : val >= el));
      return index === -1 ? 0 : arr.length - index;
    };
  
     
    console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, (o) => o.x));
  }
  
  // 141
  {
    const findHighestIndex = (arr, val) => {
      let index = arr.findIndex((element) => element > val);
      return index === -1 ? arr.length : index;
    };
  
     
    const arr = [10, 20, 30, 40, 50];
    const value = 35;
    console.log(findHighestIndex(arr, value));
  }
  
  // 142
  {
    const findLowestIndex = (arr, val) => {
      let index = arr.findIndex((element) => element >= val);
      return index === -1 ? arr.length : index;
    };
  
     
    const arr = [10, 20, 30, 40, 50];
    const value = 35;
    console.log(findLowestIndex(arr, value));
  }
  
  // 143
  {
    const sortAlphabetically = (str) => str.split("").sort().join("");
  
     
    const inputStr = "javascript";
    console.log(sortAlphabetically(inputStr));
  }
  
  //  144
  {
    const getCommonElements = (arr1, arr2) =>
      arr1.filter((element) => arr2.includes(element));
  
     
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    console.log(getCommonElements(array1, array2));
  }
  
  // 145
  {
    const randomizeArray = (arr) => {
      return arr.sort(() => Math.random() - 0.5);
    };
  
     
    const originalArray = [1, 2, 3, 4, 5];
    const randomizedArray = randomizeArray(originalArray);
    console.log(randomizedArray);
  }
  
  // 146
  {
    const shallowClone = (obj) => {
      return { ...obj };
    };
  
     
    const originalObj = { name: "John", age: 30 };
    const clonedObj = shallowClone(originalObj);
    console.log(clonedObj);
  }
  
  // 147
  {
    const serializeCookie = (name, value) =>
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
     
    const cookieName = "username";
    const cookieValue = "john_doe";
    console.log(serializeCookie(cookieName, cookieValue));
  }
  
//   148
  {
    const hashString = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash &= hash;
      }
      return Math.abs(hash);
    };
  
     
    console.log(hashString("hello"));
  }
  
//  149 
  {
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
     
    const arrayToPickFrom = [10, 20, 30, 40, 50];
    console.log(getRandomElement(arrayToPickFrom));
  }
  
//   150
  {
    const runPromisesInSeries = (promises) => {
      return promises.reduce((promiseChain, currentPromise) => {
        return promiseChain.then((chainResults) =>
          currentPromise().then((currentResult) => [
            ...chainResults,
            currentResult,
          ])
        );
      }, Promise.resolve([]));
    };
  
     
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    const promisesToRun = [
      () => delay(1000).then(() => "One"),
      () => delay(2000).then(() => "Two"),
      () => delay(3000).then(() => "Three"),
    ];
  
    runPromisesInSeries(promisesToRun).then((results) => {
      console.log(results);
    });
  }
  
//   151
  {
    const runAsync = (fn) => {
      const worker = new Worker(
        URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
          type: "application/javascript; charset=utf-8",
        })
      );
      return new Promise((res, rej) => {
        worker.onmessage = ({ data }) => {
          res(data), worker.terminate();
        };
        worker.onerror = (err) => {
          rej(err), worker.terminate();
        };
      });
    };
  
     
    const longRunningFunction = () => {
      let result = 0;
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 700; j++) {
          for (let k = 0; k < 300; k++) {
            result = result + i + j + k;
          }
        }
      }
      return result;
    };
  
    runAsync(longRunningFunction).then(console.log);
    runAsync(() => 10 ** 3).then(console.log);
    let outsideVariable = 50;
    runAsync(() => typeof outsideVariable).then(console.log);
  }

// 152  
  {
    const roundToDigits = (num, digits) => Number(num.toFixed(digits));
  
     
    console.log(roundToDigits(3.14159, 2));
  }
  
//   153
  {
    const reverseString = (str) => str.split("").reverse().join("");
  
     
    console.log(reverseString("hello"));
  }
  
//   154
  {
    const omitBy = (obj, fn) =>
      Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => !fn(value, key))
      );
  
     
    const obj = { a: 1, b: 2, c: 3 };
    const newObj = omitBy(obj, (val) => val > 1);
    console.log(newObj);
  }
  
//  155 
  {
    const reject = (arr, predicate) => arr.filter((x) => !predicate(x));
  
     
    const numbers = [1, 2, 3, 4, 5];
    const newNumbers = reject(numbers, (x) => x % 2 === 0);
    console.log(newNumbers);
  }
  
//   156
  {
    const reduceSuccessively = (arr, fn, initial) =>
      arr.reduce(
        (acc, val) => [
          ...acc,
          acc.length ? fn(acc.slice(-1)[0], val) : fn(initial, val),
        ],
        []
      );
  
     
    const numbers = [1, 2, 3, 4, 5];
    const sumArray = reduceSuccessively(numbers, (acc, val) => acc + val, 0);
    console.log(sumArray);
  }
  
//  157
  {
    const redirectToURL = (url) => (window.location.href = url);     
    redirectToURL("https://www.example.com");
  }
  
//   158
  {
    const rearg =
      (fn, indexes) =>
      (...args) =>
        fn(...indexes.map((index) => args[index]));
  
     
    const rearrangedFn = rearg((a, b, c) => [a, b, c], [2, 0, 1]);
    console.log(rearrangedFn(1, 2, 3));
  }
  
//   159
  {
    const getLinesFromFile = async (filePath) => {
      const response = await fetch(filePath);
      const text = await response.text();
      return text.split("\n");
    };
     
    // getLinesFromFile("path/to/file.txt").then((lines) => console.log(lines));
  }
  
//   160
  {
    const filterMutate = (arr, fn) => {
      const indexesToRemove = [];
      arr.forEach((item, index) => {
        if (fn(item, index)) {
          indexesToRemove.push(index);
        }
      });
      indexesToRemove.reverse().forEach((index) => arr.splice(index, 1));
      return arr;
    };
  
     
    const numbers = [1, 2, 3, 4, 5];
    const filteredNumbers = filterMutate(numbers, (x) => x % 2 === 0);
    console.log(filteredNumbers);
  }
  
//   161
  {
    const filterOutAndGetRemoved = (arr, predicate) => {
      const removed = [];
      arr.filter((item, index) => {
        if (predicate(item)) {
          removed.push(item);
          return false;
        }
        return true;
      });
      return removed;
    };
  
     
    const numbers = [1, 2, 3, 4, 5];
    console.log(filterOutAndGetRemoved(numbers, (x) => x % 2 === 0));
  }
  
//   162
  {
    const asyncToPromise =
      (fn) =>
      (...args) =>
        new Promise((resolve, reject) => {
          fn(...args, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
  
     
    const asyncFn = (x, callback) => {
      setTimeout(() => {
        callback(null, x * 2);
      }, 1000);
    };
  
    const promiseFn = asyncToPromise(asyncFn);
    promiseFn(5).then((result) => console.log(result));
  }
  
//   163
  {
    const formatBytes = (bytes, decimals = 2) => {
      if (bytes === 0) return "0 Bytes";
  
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
      );
    };
  
     
    console.log(formatBytes(123456789));
  }
  
//   164
  {
    const pluralize = (word, number) => (number === 1 ? word : word + "s");
  
     
    console.log(pluralize("apple", 1));
    console.log(pluralize("apple", 3));
  }
  
//   165
  {
    const compose =
      (...fns) =>
      (x) =>
        fns.reduce((acc, fn) => fn(acc), x);
  
     
    const add = (x) => (y) => x + y;
    const multiply = (x) => (y) => x * y;
  
    const addThenMultiply = compose(multiply(3), add(2));
    console.log(addThenMultiply(5));
  }
  
//   166
  {
    const composeAsync =
      (...fns) =>
      (arg) =>
        fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
  
     
    const sum = composeAsync(
      (x) => x + 1,
      (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),
      (x) => x + 3,
      async (x) => (await x) + 4
    );
    (async () => {
      console.log(await sum(5));
    })();
  }

//   167
  {
    const countNumbersLessThanOrEqualTo = (arr, num) =>
      (arr.filter((item) => item <= num).length / arr.length) * 100;
  
     
    const numbers = [10, 20, 30, 40, 50];
    console.log(countNumbersLessThanOrEqualTo(numbers, 30));
  }
  
//   168
  {
    const groupBy = (array, predicate) => {
      return array.reduce(
        (acc, value) => {
          const group = predicate(value) ? 0 : 1;
          acc[group].push(value);
          return acc;
        },
        [[], []]
      );
    };
  
     
    const numbers = [1, 2, 3, 4, 5];
    const isEven = (num) => num % 2 === 0;
    console.log(groupBy(numbers, isEven));
  }
  
//   169
  {
    const partialRight =
      (fn, ...partials) =>
      (...args) =>
        fn(...args, ...partials);
  
     
    const greet = (greeting, name) => `${greeting}, ${name}!`;
    const greetMorning = partialRight(greet, "Good morning");
    console.log(greetMorning("Malak"));
  }
  
//   170
  {
    const partialLeft =
      (fn, ...partials) =>
      (...args) =>
        fn(...partials, ...args);
  
     
    const greet = (greeting, name) => `${greeting}, ${name}!`;
    const greetEnthusiastically = partialLeft(greet, "Hello");
    console.log(greetEnthusiastically("Malak"));
  }
  
//   171
  {
    const parseCookie = (cookieHeader) => {
      return cookieHeader
        .split(";")
        .map((pair) => pair.trim().split("="))
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    };
  
     
    const cookieHeader = "name=John; age=30; city=New York";
    console.log(parseCookie(cookieHeader));
  }
  

//   172
  {
    const transformArguments =
      (fn, transform) =>
      (...args) =>
        fn(...args.map(transform));
  
     
    const add = (a, b) => a + b;
    const addTriple = transformArguments(add, (x) => 3 * x);
    console.log(addTriple(2, 4));
  }

//   173
  {
    const getNthElement = (arr, n) => (n >= 0 ? arr[n] : arr[arr.length + n]);
  
     
    const array = [1, 2, 3, 4, 5];
    console.log(getNthElement(array, 2));
    console.log(getNthElement(array, -1));
  }
  
//   174
  {
    const nodeListToArray = (nodeList) => Array.from(nodeList);
  
     
    const nodeList = document.querySelectorAll("h1");
    console.log(nodeListToArray(nodeList));
  }
  
//   175
  {
    const getFastestFunctionIndex = (functionsArray) => {
      let times = functionsArray.map((func) => {
        let start = performance.now();
        func();
        let end = performance.now();
        return end - start;
      });
  
      return times.indexOf(Math.min(...times));
    };
  
     
    let functionsArray = [
      () => {
        for (let i = 0; i < 1000000; i++) {}
      },
      () => {
        for (let i = 0; i < 5000000; i++) {}
      },
      () => {
        for (let i = 0; i < 3000000; i++) {}
      },
    ];
  
    console.log(getFastestFunctionIndex(functionsArray));
  }

//   176
  {
    const getNMinimumElements = (arr, n) => {
      if (n >= arr.length) {
        return arr.sort((a, b) => a - b);
      } else {
        return arr
          .slice()
          .sort((a, b) => a - b)
          .slice(0, n);
      }
    };
  
     
    let array = [5, 2, 8, 1, 9];
    console.log(getNMinimumElements(array, 2));
  }
  
//   177
  {
    const getMinValueAfterMapping = (arr, mapFunc) => {
      let mappedArray = arr.map(mapFunc);
      return Math.min(...mappedArray);
    };
  
     
    let numbers = [1, 2, 3, 4];
    let mapFunction = (x) => x * x;
    console.log(getMinValueAfterMapping(numbers, mapFunction));
  }
  
//   178
  {
    const combineObjects = (...objects) => Object.assign({}, ...objects);
  
     
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3 };
    console.log(combineObjects(obj1, obj2));
  }
  
//   179
  {
    const compareObjects = (obj1, obj2, comparator) => {
      let keys1 = Object.keys(obj1);
      let keys2 = Object.keys(obj2);
  
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keys1.every((key) => comparator(obj1[key], obj2[key]));
    };
  
     
    let object1 = { a: 1, b: 2 };
    let object2 = { a: 1, b: 3 };
    console.log(compareObjects(object1, object2, (a, b) => a === b));
  }
  
//   180
  {
    const keysToLowerCase = (obj) =>
      Object.keys(obj).reduce((acc, key) => {
        acc[key.toLowerCase()] = obj[key];
        return acc;
      }, {});
  
     
    let originalObj = { Name: "John", Age: 30 };
    let newObj = keysToLowerCase(originalObj);
    console.log(newObj);
  }
  
//   181
  {
    const getLastElement = (arr) => arr[arr.length - 1];
  
     
    let array = [1, 2, 3, 4, 5];
    console.log(getLastElement(array));
  }
  
//   182
  {
    const joinArrayElements = (arr, separator, endSeparator) =>
      arr.join(separator) + endSeparator;
  
     
    let array = ["Hello", "World"];
    console.log(joinArrayElements(array, " ", "!"));
  }
  
//   183
  {
    const isValidJSON = (str) => {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    };
  
     
    let jsonString = '{"name": "John", "age": 30}';
    console.log(isValidJSON(jsonString));
  }
//   184
 
  {
    const isUpperCase = (str) => str === str.toUpperCase();
  
     
    let uppercaseStr = "HELLO";
    console.log(isUpperCase(uppercaseStr));
  }
  
  //185
  {
    const isUndefined = (value) => {
      return typeof value === "undefined";
    };
  
     
    let x;
    console.log(isUndefined(x));
  }
  
//   186
  {
    const isSymbol = (value) => typeof value === "symbol";
  
     
    console.log(isSymbol(Symbol()));
  }
  

//   187
  {
    const isString = (arg) => typeof arg === "string";
  
     
    console.log(isString("hello"));
  }
  
//   188
  {
    const checkSortOrder = (arr) => {
      let ascSorted = arr.slice().sort((a, b) => a - b);
      let descSorted = arr.slice().sort((a, b) => b - a);
  
      if (JSON.stringify(arr) === JSON.stringify(ascSorted)) {
        return 1;
      } else if (JSON.stringify(arr) === JSON.stringify(descSorted)) {
        return -1;
      } else {
        return 0;
      }
    };
  
     
    console.log(checkSortOrder([1, 2, 3]));
    console.log(checkSortOrder([3, 2, 1]));
    console.log(checkSortOrder([2, 1, 3]));
  }
  
//   189
  {
    const isPromiseLike = (obj) => obj && typeof obj.then === "function";
  
     
    console.log(isPromiseLike({ then: function () {} }));
  }
  
//   190
  {
    const isPrimitive = (value) => value !== Object(value);
  
     
    console.log(isPrimitive("hello"));
    console.log(isPrimitive({}));
  }
  
//   191
  {
    const isPrime = (num) => {
      const boundary = Math.floor(Math.sqrt(num));
      for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
      return num >= 2;
    };
  
     
    console.log(isPrime(11));
  }
  
//   192
  {
    const isObjectFromObjectConstructor = (value) =>
      value instanceof Object && value.constructor === Object;
  
     
    console.log(isObjectFromObjectConstructor(new Object()));
  }

//   193
  {
    const isObjectLike = (value) => value !== null && typeof value === "object";
  
     
    console.log(isObjectLike({}));
  }
  
//   194
  {
    const isObject = (value) => value !== null && typeof value === "object";
  
     
    console.log(isObject({}));
  }

  //195
  {
    const isNumber = (value) => typeof value === "number" && !isNaN(value);
  
     
    console.log(isNumber(42));
  }
  
//   196
  {
    const isNull = (value) => value === null;
  
     
    console.log(isNull(null));
  }
  
//   197
  {
    const isLowerCase = (str) => str === str.toLowerCase();
  
     
    console.log(isLowerCase("hello"));
  }
  

//   198
  {
    const isFunction = (value) => typeof value === "function";
  
     
    console.log(isFunction(() => {}));
  }
  
  //  199
  {
    const isEven = (number) => number % 2 === 0;
  
     
    console.log(isEven(10));
  }

  // 200
  {
    const isEmpty = (val) => val == null || !(Object.keys(val) || val).length;
  
     
    console.log(isEmpty({}));
    console.log(isEmpty([]));
    console.log(isEmpty(new Map()));
    console.log(isEmpty(new Set()));
    console.log(isEmpty({ key: "value" }));
  }
  
  //  201
  {
    const isDivisible = (num, divisor) => num % divisor === 0;
  
     
    console.log(isDivisible(12, 3));
  }
  
//   202
  {
    const checkEvenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");
  
     
    console.log(checkEvenOrOdd(7));
  }
  
  //  203
  {
    const isBrowserEnvironment = () =>
      typeof window !== "undefined" && typeof document !== "undefined";
  
     
    console.log(isBrowserEnvironment());
  }
  
  //   204
  {
    const isNativeBoolean = (value) => typeof value === "boolean";
  
     
    console.log(isNativeBoolean(true));
  }
  
  //   205
  {
    const isArray = (value) => Array.isArray(value);
  
     
    console.log(isArray([1, 2, 3]));
  }
  
  //   206
  {
    const isAnagram = (str1, str2) => {
      const cleanString = (str) => str.replace(/[^\w]/g, "").toLowerCase();
      return cleanString(str1) === cleanString(str2);
    };
  
     
    console.log(isAnagram("s ilent", "Silent"));
  }
  
  //   207
  {
    const isAbsoluteURL = (url) => {
      const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
      return regex.test(url);
    };
  
     
    const urlString = "https://www.example.com/path/to/resource";
    console.log(isAbsoluteURL(urlString));
  }
  
//   208
  {
    const checkType = (value, type) => typeof value === type;
  
     
    console.log(checkType(42, "number"));
  }
  
//   209
  {
    const getCommonElements = (arr1, arr2, comparator) => {
      return arr1.filter((item1) =>
        arr2.some((item2) => comparator(item1, item2))
      );
    };
  
     
    const commonElements = getCommonElements(
      [1, 2, 3],
      [3, 4, 5],
      (a, b) => a === b
    );
    console.log(commonElements);
  }
  
  //   210
  {
    const applyFunction = (arr, func) => arr.map(func);
    const getCommonElements = (arr1, arr2) =>
      arr1.filter((value) => arr2.includes(value));
  
     
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];
  
    const modifiedArray1 = applyFunction(array1, (element) => element * 2);
    const modifiedArray2 = applyFunction(array2, (element) => element + 1);
  
    const commonElements = getCommonElements(modifiedArray1, modifiedArray2);
  
    console.log(commonElements);
  }
  
  //  211 
  {
    function getCommonElements(arr1, arr2) {
      return arr1.filter((value) => arr2.includes(value));
    }
  
     
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const commonElements = getCommonElements(array1, array2);
    console.log(commonElements);
  }
  
// 212
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() =>
        initializeNDArray(val, ...args.slice(1))
      );

 
console.log(initializeNDArray(1, 3));

// 213
const initializeArray = (length, value) => {
  return new Array(length).fill(value);
};

 
const initializedArrayy = initializeArray(5, 2);
console.log(initializedArrayy);

// 214
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

 
const initializedArray = initializeArrayWithRange(10, 0, 2);
console.log(initializedArray);

// 215
const initial = (arr) => arr.slice(0, -1);

 
console.log(initial([1, 2, 3]));

// 216
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

 
console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));

// 217
const isNumberInRange = (number, start, end) => {
  return number >= start && number <= end;
};

 
const isInRange = isNumberInRange(5, 1, 10);
console.log(isInRange);

// 218
const hz = (fn, iterations = 100) => {
  const before = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (1000 * iterations) / (performance.now() - before);
};
const numberss = Array(10000)
  .fill()
  .map((_, i) => i);

const sumReduce = () => numberss.reduce((acc, n) => acc + n, 0);
const sumForLoop = () => {
  let sum = 0;
  for (let i = 0; i < numberss.length; i++) sum += numberss[i];
  return sum;
};

 
console.log(Math.round(hz(sumReduce)));
console.log(Math.round(hz(sumForLoop)));

// 219
const hammingDistance = (num1, num2) =>
  ((num1 ^ num2).toString(2).match(/1/g) || "").length;

 
console.log(hammingDistance(5, 3));

// 220
const getNativeType = (value) => {
  return value === undefined
    ? "undefined"
    : value === null
    ? "null"
    : typeof value === "object"
    ? value.constructor.name.toLowerCase()
    : typeof value;
};

 
console.log(getNativeType(5));
console.log(getNativeType(null));

  
//  221
    const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);
    console.log(getColonTimeFromDate(new Date()));

//   222
    const geometricProgression = (end, start = 1, step = 2) =>
      Array.from({
        length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,
      }).map((v, i) => start * step ** i);

    console.log(geometricProgression(256, 1, 4));
  
  
//    223
    const gcd = (...arr) => {
      const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
      return [...arr].reduce((a, b) => _gcd(a, b));
    };
  
    console.log(gcd(8, 36));
  
  // 224
    const removeHtmlTags = (inputString) => {
      return inputString.replace(/<[^>]*>/g, "");
    };
  
    const stringWithTags =
      '<p>This is <b>bold</b> text with <a href="#">links</a>.</p>';
    const stringWithoutTags = removeHtmlTags(stringWithTags);
    console.log(stringWithoutTags);

  
//    225
    const calculateStandardDeviation = (numbers) => {
      const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
      const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2));
      const averageSquaredDiff =
        squaredDifferences.reduce((acc, val) => acc + val, 0) / numbers.length;
      const standardDeviation = Math.sqrt(averageSquaredDiff);
  
      return standardDeviation;
    };
  
    const numbers11 = [1, 2, 3, 4, 5];
    const stdDeviation = calculateStandardDeviation(numbers11);
    console.log(stdDeviation);

  
   // 226
    const getRandomElements = (array, n) => {
      const result = [];
      const arrayCopy = [...array];
  
      for (let i = 0; i < n && arrayCopy.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * arrayCopy.length);
        const randomElement = arrayCopy.splice(randomIndex, 1)[0];
        result.push(randomElement);
      }
      return result;
    };
  
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomElements = getRandomElements(originalArray, 5);
    console.log(randomElements);
  
    // 227
    const removeElements = (arr, callback) => {
      return arr.filter(callback);
    };
    
    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filteredNumbers = removeElements(numbers2, (num) => num % 2 === 0);
    console.log(filteredNumbers);
    
    // 228
    function sampleFunction() {}
    
    console.log(sampleFunction.name);
    
    // 229
    const convertCamelCase = (inputString) => {
      const wordsArray = inputString.split(/(?=[A-Z])/);
      const convertedString = wordsArray.join(" ").toLowerCase();
      return convertedString;
    };
    
    const camelCaseString = "camelCaseStringExample";
    const convertedString = convertCamelCase(camelCaseString);
    console.log(convertedString);
    
    // 230
    const formatMilliseconds = (milliseconds) => {
      const totalSeconds = Math.floor(milliseconds / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
    
      const remainingSeconds = totalSeconds % 60;
      const remainingMinutes = totalMinutes % 60;
      const remainingHours = totalHours % 24;
      const remainingMilliseconds = milliseconds % 1000;
    
      return {
        days: totalDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
        milliseconds: remainingMilliseconds,
      };
    };
    
    const milliseconds = 123456789;
    const formattedTime = formatMilliseconds(milliseconds);
    console.log(formattedTime);
    
    // 231
    const iterateObjectReverse = (obj, callback) => {
      const keys = Object.keys(obj);
      for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        callback(key, obj[key]);
      }
    };
    
    const myObject = {
      name: "John",
      age: 30,
      city: "New York",
    };
    const printKeyValue = (key, value) => {
      console.log(`${key}: ${value}`);
    };
    iterateObjectReverse(myObject, printKeyValue);
    
    // 232
    const makeFirstArgLast = (func) => {
      return (...args) => {
        const [firstArg, ...restArgs] = args;
        return func(...restArgs, firstArg);
      };
    };
    
    const addThreeNumbers = (num1, num2, num3) => {
      return num1 + num2 + num3;
    };
    const newFunction = makeFirstArgLast(addThreeNumbers);
    console.log(newFunction(1, 2, 3));
    
    // 233
    const flattenObject = (obj, parentKey = "", result = {}) => {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const newKey = parentKey ? `${parentKey}.${key}` : key;
          if (typeof obj[key] === "object" && obj[key] !== null) {
            flattenObject(obj[key], newKey, result);
          } else {
            result[newKey] = obj[key];
          }
        }
      }
      return result;
    };
    
    const objectt = { a: { b: 1 }, c: { d: { e: 5, f: 6 } }, g: 7 };
    const flattenedObj = flattenObject(objectt);
    console.log(flattenedObj);
    
    // 234
    const flatten = (array, depth = 1) => {
      return array.flat(depth);
    };
    
    const arrayy = [1, [2, 3], [4, [5, 6]], 7];
    console.log(flatten(arrayy, 2));
    
    // 235
    const findKeyy = (obj, func) =>
      Object.keys(obj).findLast((key) => func(obj[key]));
    
    const obj22 = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    };
    const keyy= findKeyy(obj22, (value) => value % 2 === 0);
    console.log(keyy);
    
    // 236
    const findKey = (obj, func) => Object.keys(obj).find((key) => func(obj[key]));
    
    const objj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    };
    const key = findKey(objj, (value) => value % 2 === 0);
    console.log(key);
    
    // 237
    const fibonacciSequence = (n) => {
      let sequence = [0, 1];
      for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
      return n === 1 ? [0] : sequence.slice(0, n);
    };
    
    console.log(fibonacciSequence(7));
    
    // 238
    const factorial = (number) => {
      return number < 0
        ? console.log("Negative numbers are not allowed!")
        : number <= 1
        ? 1
        : number * factorial(number - 1);
    };
    
    console.log(factorial(5));
    
    // 239
    const escapeRegExp = (string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };
    
    const inputStringg = "Escape this string. ^[.*+?^${}()|[]\\]";
    const escapedString = escapeRegExp(inputStringg);
    console.log(escapedString);
    
    // 240
    const hasChild = (parentEl, childEl) => {
      parent = document.querySelector(parentEl);
      child = document.querySelector(childEl);
      return parent !== child && parent.contains(child) ? true : false;
    };
    
    console.log(hasChild("body", "h1"));
    
    // 241
    const dropFromLeft = (array, func) => {
      while (array.length > 0 && !func(array[0])) {
        array.shift();
      }
      return array;
    };
    
    console.log(dropFromLeft([7, 5, 3, 2, 1], (n) => n % 2 === 0));
    
    // 242
    const dropFromRight = (array, func) => {
      while (array.length > 0 && !func(array[array.length - 1])) {
        array.pop();
      }
      return array;
    };
    
    console.log(dropFromRight([1, 2, 3, 5, 7], (n) => n % 2 === 0));
    
    // 243
    const calculateDistance = (x1, y1, x2, y2) => {
      return Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2));
    };
    
    console.log(calculateDistance(1, 2, 4, 8));
    
    // 244
    const arrayDifference = (arrayOne, arrayTwo) => {
      const output = [];
      output.push(...arrayOne.filter((element) => !arrayTwo.includes(element)));
      output.push(...arrayTwo.filter((element) => !arrayOne.includes(element)));
      return output;
    };
    
    const arrayA = [1, 2, 3, 4, 5];
    const arrayB = [3, 4,5, 6, 7];
    const difference = arrayDifference(arrayA, arrayB);
    console.log(difference);


// 245
const InvokeAfterTime = (func, period) => {
  return setTimeout(func, period);
};

console.log(InvokeAfterTime(console.log("Hello World"), 3000));

// 246
const degreeToRadian = (angle) => {
  return (angle * Math.PI) / 180.0;
};

console.log(degreeToRadian(90.0));

// 247
const assignDefaultValues = (obj, defaults) => {
  Object.keys(defaults).forEach((key) => {
    if (obj[key] === undefined) {
      obj[key] = defaults[key];
    }
  });
  return obj;
};

const normalSettings = {
  a: 1,
  b: undefined,
};

const defaultSettings = {
  a: 2,
  b: true,
  c: false,
};

const updatedSettings = assignDefaultValues(normalSettings, defaultSettings);
console.log(updatedSettings);

// 248
const deepFlatten = (array) => {
  return array.flat(Infinity);
};

const arrayyyy = [1, [2, 3], [4, [5, 6]], 7];
console.log(deepFlatten(arrayyyy));

// 249
const currentUrl = window.location.href;
console.log(currentUrl);

// 250
function createElement(string) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = string;
  return tempDiv.firstChild;
}

const element = createElement("<span>Simple Example</span>");
console.log(element);

// 251
const fs = require("fs");
const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));

JSONToFile({ test: "is passed" }, "testJsonFile");

// 252
const RGBToHex = (r, g, b) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

const red = 255;
const green = 128;
const blue = 0;
console.log(RGBToHex(red, green, blue));

// 253
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

console.log(UUIDGeneratorBrowser());

// 254
const crypto = require("crypto");
const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );
console.log(UUIDGeneratorNode());

// 255
const checkAny = (array, check) => {
  return array.some(check);
};

const arrayyy = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(checkAny(arrayyy, even));

// 256
const equals = (numOne, numTwo, limit = 0.0001) => {
  return Math.abs(numOne - numTwo) < limit;
};

console.log(equals(4.9999, 5));

// 257
const CSV = (array) => {
  array.join(",");
};

const elements = ["Fire", "Air", "Water"];
console.log(elements.join());

// 258
const processArguments = (...args) => {
  const n = 3;
  const processedArgs = args.slice(0, n);

  console.log(processedArgs);
};

processArguments(1, 2, 3, 4, 5);

// 259
const str = "SGVsbG8=";
console.log(atob(str));

// 260
const factoriall = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factoriall(n - 1);
  }
};

const binomialCoefficient = (n, k) => {
  if (k < 0 || k > n) {
    return 0;
  } else {
    return factorial(n) / (factorial(k) * factorial(n - k));
  }
};

const n = 5;
const k = 2;
console.log(binomialCoefficient(n, k));

// 261
function isBottomVisible() {
  const documentHeight = document.body.scrollHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return scrollPosition + windowHeight >= documentHeight;
}

window.addEventListener("scroll", function () {
  if (isBottomVisible()) {
    console.log("Bottom of the page is visible");
  } else {
    console.log("Bottom of the page is not visible");
  }
});

// 262
const strr = "Hello";
console.log(btoa(strr));

// 263
const stringCapitalize = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

const string = "hello";
console.log(stringCapitalize(string));

// 264
const stringCapitalizeEach = (str) => {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
};

const stringg = "information technology institute";
console.log(stringCapitalizeEach(stringg));

// 265
const arrayChunk = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
};

const arrayys = [1, 2, 3, 4, 5];
console.log(arrayChunk(arrayys, 3));

// 266
const clamp = (number, a, b) => {
  return Math.max(Math.min(number, Math.max(a, b)), Math.min(a, b));
};

const number = 8;
const a = 3;
const b = 10;
console.log(clamp(number, a, b));

// 267
const midPoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];

console.log(midPoint([2, 2], [3, 3]));

// 268
const printArrayWithIndex = (array) => {
  for (let [index, item] of array.entries()) {
    console.log(`${index}: ${item}`);
  }
};

const arrayss = ["Red", "Green", "Black", "White"];
printArrayWithIndex(arrayss);
