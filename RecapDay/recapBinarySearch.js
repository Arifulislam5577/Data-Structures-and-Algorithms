const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Array মধ্যে কোনো একটা এলিমেন্ট আছে কিনা সেটা বের করার জন্য বাইনারি সার্চ এলগোরিদম ব্যবহার করে একটা ফাংশন লিখ।

function hasThisNum(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = parseInt((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === num) {
      return true;
    } else if (arr[middleIndex] < num) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return false;
}

console.log(hasThisNum(arr, 1));
