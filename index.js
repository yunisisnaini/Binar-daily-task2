const persons = [
  {
    _id: "6410370d81bf660621074ab0",
    age: 38,
    eyeColor: "green",
    name: "Walsh Juarez",
    address: "Bali",
    registered: "2022-09-07T02:39:25 -07:00",
    friends: [
      {
        id: 0,
        name: "Farid",
        isActive: false,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "baseball",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
      {
        id: 2,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
    ],
  },
  {
    _id: "6410370d6d2085e6d68532e0",
    age: 33,
    eyeColor: "brown",
    name: "Andrews Winters",
    address: "Jakarta",
    registered: "2023-02-19T11:13:58 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
      {
        id: 2,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "baseball",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
    ],
  },
  {
    _id: "6410370d47961a96ce587b99",
    age: 33,
    eyeColor: "blue",
    name: "Britney Bradford",
    address: "Bandung",
    registered: "2021-12-24T06:12:00 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 2,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
      {
        id: 2,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
    ],
  },
  {
    _id: "6410370d1ade118454cf7e08",
    age: 29,
    eyeColor: "green",
    name: "Higgins Petersen",
    address: "Bandung",
    registered: "2021-09-22T12:24:46 -07:00",
    friends: [
      {
        id: 0,
        name: "Farid",
        isActive: true,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 1,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 1,
        name: "Farid",
        isActive: false,
        favoriteFruit: "banana",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 2,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "banana",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
    ],
  },
  {
    _id: "6410370dbf15a4d38650c187",
    age: 35,
    eyeColor: "brown",
    name: "Augusta Mathis",
    address: "Bali",
    registered: "2022-07-07T02:39:38 -07:00",
    friends: [
      {
        id: 0,
        name: "Farid",
        isActive: false,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 2,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 2,
        name: "Farid",
        isActive: true,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 2,
            hobby: "football",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
    ],
  },
];

// 1) display/print person yang registered dibawah tahun 2022
// 2) display person yang address nya Bali
console.log("-----2-----");
const personFilteredBali = persons.filter((p) => p.address === "Bali");
console.log(personFilteredBali);

// 3) display friends yang hobby nya football
console.log("-----3-----");
const footballFriends = [];
for (let person of persons) {
  for (let friend of person.friends) {
    for (let h of friend.hobby) {
      if (h.hobby === "football") {
        footballFriends.push(friend);
      }
    }
  }
}
console.log(footballFriends);

// 4) display hobby dari friends id 2
console.log("-----4-----");
persons.forEach((person) => {
  person.friends
    .filter((friend) => friend.id === 2)
    .map((friend) => {
      console.log(
        `Hobby ${friend.name} : `,
        friend.hobby.map((hobby) => hobby.hobby)
      );
    });
});

// 5) display friends yang gender nya male dan mempunyai hobby basketball
// 6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry
console.log("-----6-----");
persons.forEach((person) => {
  person.friends.forEach((friend) => {
    if (
      friend.isActive &&
      friend.gender === "female" &&
      friend.favoriteFruit === "strawberry"
    ) {
      console.log(friend);
    }
  });
});

// 7) display siapa saja yang mempunya teman name Theresia
console.log("-----7-----");
const personsWithTheresiaFriend = persons.filter((person) => {
  return person.friends.some((friend) => friend.name === "Theresia");
});
console.log(personsWithTheresiaFriend);

// 8) display hobby id 1 dari friends yang isActive nya true
// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
console.log("-----9-----");
const result = persons.filter((person) => {
  return (
    person.eyeColor === "brown" &&
    person.favoriteFruit === "banana" &&
    person.friends.some((friend) => {
      return friend.hobby.some((hobby) => {
        return hobby.hobby === "basketball";
      });
    })
  );
});
// console.log(result);
// 10) display person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023
