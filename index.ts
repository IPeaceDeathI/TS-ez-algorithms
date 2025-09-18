// ================= Задание 1 =================
// Проверка валидности скобок
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// ================= Задание 2 =================
// Слияние двух отсортированных массивов
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
}

// ================= Задание 3 =================
// Максимальная прибыль от покупки и продажи акций
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}

// ================= Задание 4 =================
// Проверка анаграммы
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count: Record<string, number> = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// ================= Задание 5 =================
// Класс RecentCounter
class RecentCounter {
  private requests: number[];

  constructor() {
    this.requests = [];
  }

  ping(t: number): number {
    this.requests.push(t);
    while (this.requests[0] < t - 3000) {
      this.requests.shift();
    }
    return this.requests.length;
  }
}

// ================= Тесты =================
console.log("Задание 1:");
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([])"));    // true
console.log(isValid("([)]"));    // false

console.log("\nЗадание 2:");
let nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1); // [1,2,2,3,5,6]

nums1 = [1];
merge(nums1, 1, [], 0);
console.log(nums1); // [1]

nums1 = [0];
merge(nums1, 0, [1], 1);
console.log(nums1); // [1]

console.log("\nЗадание 3:");
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1]));   // 0

console.log("\nЗадание 4:");
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false

console.log("\nЗадание 5:");
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));    // 1
console.log(recentCounter.ping(100));  // 2
console.log(recentCounter.ping(3001)); // 3
console.log(recentCounter.ping(3002)); // 3
