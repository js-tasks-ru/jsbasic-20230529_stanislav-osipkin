function showSalary(users, age) {
  return users.filter(user => user.age <= age)
  .map((user) => `${user.name}, ${user.balance}`)
  .join('\n');
}

// function showSalary(users, age) {
//   let arr = users.filter(user => user.age <= age)
//   .map(user => `${user.name}, ${user.balance}`);
//   return arr.reduce((sum, item, index) => sum + ((index < arr.length - 1)
//     ? `${item}\n` : `${item}`), '');

// }
