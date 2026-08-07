const objectArrayGroup = document.querySelector(".object-array");
const printUsersBtn = objectArrayGroup.querySelector(".print-users-btn");
const printNotSubscribedBtn = objectArrayGroup.querySelector(
    ".print-not-subscribed-btn",
);
const printFullNamesBtn = objectArrayGroup.querySelector(
    ".print-full-names-btn",
);
const changeUserEmailBtn = objectArrayGroup.querySelector(
    ".change-user-email-btn",
);
const printSubscribePercentBtn = objectArrayGroup.querySelector(
    ".print-subscribe-percent-btn",
);
const sortUsersByAgeBtn = objectArrayGroup.querySelector(
    ".sort-users-by-age-btn",
);

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

function printUsers() {
    console.dir(users);
}

function getNotSubscribedUsers() {
    return users.filter((user) => !user.isSubscribed);
}

function printFullNames() {
    users.forEach((user) => {
        console.log(user.getFullName());
    });
}

function changeUserEmail(id) {
    const user = users.find((user) => user.id === id);

    user.email = `useremail${id}@ukr.net`;
}

function getSubscribePercent() {
    const countSubscribeUsers = users.reduce((acc, user) => {
        if (user.isSubscribed) {
            acc += 1;
        }
        return acc;
    }, 0);

    return (countSubscribeUsers / users.length) * 100;
}

function sortUsersByAge() {
    users.sort((user1, user2) => user1.age - user2.age);
}

printUsersBtn.addEventListener("click", printUsers);
printNotSubscribedBtn.addEventListener("click", () => {
    console.dir(getNotSubscribedUsers());
});
printFullNamesBtn.addEventListener("click", printFullNames);
changeUserEmailBtn.addEventListener("click", () => {
    const userId = Number(
        prompt("Введіть id користувача пошту якого ви хочете змінити"),
    );
    changeUserEmail(userId);
});
printSubscribePercentBtn.addEventListener("click", () => {
    console.log(`Підписаних користувачів: ${getSubscribePercent()}%`);
});
sortUsersByAgeBtn.addEventListener("click", sortUsersByAge);
