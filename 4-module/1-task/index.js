function makeFriendsList(friends) {
  let friendsList = document.createElement('ul');

  for (let item of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    friendsList.appendChild(li);
  }
  return friendsList;
}
