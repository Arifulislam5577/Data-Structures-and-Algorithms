function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let arrSecondElement = arr[i];
    let arrFirstIndex = i - 1;

    while (arrFirstIndex >= 0 && arr[arrFirstIndex] > arrSecondElement) {
      arr[arrFirstIndex + 1] = arr[arrFirstIndex];
      arrFirstIndex--;
    }

    arr[arrFirstIndex + 1] = arrSecondElement;
  }

  return arr;
}

console.log(insertionSort([3, 2, 1]));

// প্রথম এলিমেন্টকে সর্টেট ধরে নিতে হবে।
// এরপরে arr এর প্রথম এলিমেন্ট এবং দ্বিতীয় এলিমেন্টকে কম্পেয়ার করতে হবে।
// যদি প্রথম এলিমেন্ট দ্বিতীয় এলিমেন্ট থেকে বড় হয় তাহলে দ্বিতীয় এলিমেন্টকে প্রথম এলিমেন্ট করে দিতে হবে।
// Bio(O) --> O(n^2)
