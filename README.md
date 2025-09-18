# TypeScript Algorithms – Test Tasks

Репозиторий с решением 5 классических алгоритмических задач на языке **TypeScript**.  
Все решения находятся в файле [index.ts](./index.ts).

---

## 📌 Список задач

### 1. Проверка валидности скобок
Функция `isValid(s: string): boolean` проверяет, является ли строка со скобками допустимой.

Примеры:
```ts
isValid("()")      // true
isValid("()[]{}")  // true
isValid("(]")      // false
```

---

### 2. Слияние двух отсортированных массивов
Функция `merge(nums1, m, nums2, n)` объединяет два массива в `nums1` (без возврата нового массива).

Примеры:
```ts
let nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1); // [1,2,2,3,5,6]
```

---

### 3. Максимальная прибыль от акций
Функция `maxProfit(prices: number[]): number` возвращает максимальную возможную прибыль при одной сделке (купить → продать).

Примеры:
```ts
maxProfit([7,1,5,3,6,4]) // 5
maxProfit([7,6,4,3,1])   // 0
```

---

### 4. Проверка анаграммы
Функция `isAnagram(s: string, t: string): boolean` проверяет, являются ли строки анаграммами.

Примеры:
```ts
isAnagram("anagram", "nagaram") // true
isAnagram("rat", "car")         // false
```

---

### 5. Класс RecentCounter
Класс `RecentCounter` считает количество недавних запросов за последние **3000ms**.

Пример:
```ts
const recentCounter = new RecentCounter();
recentCounter.ping(1);    // 1
recentCounter.ping(100);  // 2
recentCounter.ping(3001); // 3
recentCounter.ping(3002); // 3
```

---

## 🚀 Запуск проекта

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/<your-username>/typescript-algorithms.git
   cd typescript-algorithms
   ```

2. Установить зависимости:
   ```bash
   npm install
   ```

3. Запустить:
   ```bash
   npx ts-node index.ts
   ```

---

## 📂 Структура проекта
```
.
├── index.ts    # решения всех задач + тесты
└── README.md   # описание проекта
```

---

✍️ Автор: *Денис Бойко*
