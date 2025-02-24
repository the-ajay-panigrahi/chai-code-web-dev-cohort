let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

let totalSales = salesData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 0);

// console.log(totalSales);

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});
// console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];

// find most active user(using reduce)
let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
console.log(mostActiveUser);

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce((report, expense) => {
  if (!report[expense.category]) {
    report[expense.category] = 0;
  }
  report[expense.category] += expense.amount;

  return report;
}, {});

// console.log("Expense Report ", expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];
let pendingSortedTasks = tasks.filter((task) => {
  if (!task.completed) {
    return task;
  }
});

pendingSortedTasks.sort((a, b) => a.priority - b.priority);

// console.log(pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let movies = movieRatings.map((movie) => {
  let ratingTotal = movie.ratings.reduce((acc, currVal) => {
    return acc + currVal;
  });
  let avgRating = ratingTotal / movie.ratings.length;
  return { title: movie.title, averageRating: Number(avgRating.toFixed(2)) };
});

// console.log(movies);
