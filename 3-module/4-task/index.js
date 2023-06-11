function showSalary(users, age) {
  return users.filter(user => user.age <= age)
  .map((user) => `${user.name}, ${user.balance}`)
  .reduce((sum, user, index) => sum + ((index < users.length - 1)
    ? `${user}\n` : `${user}`), '');
}
