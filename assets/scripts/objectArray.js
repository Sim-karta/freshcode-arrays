function User(id, name, surname, age, isMale, email, isSubscribed) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

const userInfo = {};

userInfo.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

User.prototype = userInfo;

const users = [];

for (let i = 0; i < 10; i++) {
    const user = new User(
        i + 1,
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() < 0.5,
        `useremail${i}@gmail.com`,
        Math.random() < 0.5,
    );
    users.push(user);
}

console.dir(users);

console.log(users[1].getFullName());

const notSubscribeUsers = users.filter((user) => {
    return user.isSubscribed === false;
});

console.dir(notSubscribeUsers);

users.forEach((user) => {
    console.log(user.getFullName());
});

const user2 = users.find((user) => {
    return user.id === 2;
});

user2.email = "useremail2@ukr.net";

console.dir(users);

const countSubscribeUsers = users.reduce((acc, user) => {
    if (user.isSubscribed) {
        acc += 1;
    }
    return acc;
}, 0);

const percentSubscribeUsers = (countSubscribeUsers / users.length) * 100;
console.log(`Підписаних користувачів: ${percentSubscribeUsers}%`);

users.sort((user1, user2) => user1.age - user2.age);

console.dir(users);