/**
 * // MongoDB Aggregation: 
 * 
 */


// count all the active users:
[
  {
    $match: {
      isActive: true
    }
  },
  {
      $count: 'Active Users'
  }
]

[
  {
    $match: {
      isActive: false
    }
  },
  {
      $count: 'InActive Users'
  }
]


// 1. count all the records-
const result = db.User.aggregate([
  {
    $count: "total users",
  },
]);

// 2. get all active users and count all active users-
[
  {
    $match: {
      isActive: true,
    },
  },
  {
    $count: "Active users",
  },
]

// 3. get all in active users with count
[
  ({
    $match: {
      isActive: false,
    },
  },
  {
    $count: "Offline users",
  })
];


// // 3. group the people based on the gender
[
  {
    $group: {
      _id: "$gender",
    },
  },
][
  // 4. find average age among all data
  {
    $group: {
      _id: null,
      AverageAge: {
        $avg: "$age",
      },
    },
  }
][
  // 5 group people by age

  {
    $group: {
      _id: "$age",
    },
  }
][
  // 5 group people by age and count
  ({
    $group: {
      _id: "$age",
    },
  },
  {
    $count: "Age",
  })
]

// 6. group people by gender and calculate average of all group
[
  {
    $group: {
      _id: "$gender",
      averageAge: {
        $avg: "$age",
      },
    },
  }
];

// // 1. count all the records-
// [
//   {
//     $count: 'total users'
//   }
// ]

// 2. get all active users and count all active users-
// [
//   {
//     $match: {
//       isActive: true
//     }
//   },
//   {
//     $count: "Active users"
//   }
// ]

// // 3. get all in active users with count
// [
//   {
//     $match: {
//       isActive: false
//     }
//   }, {
//     $count: 'Offline users'
//   }
// ]

// // 3. group the people based on the gender
// [
//   {
//     $group: {
//       _id: "$gender"
//     }
//   }
// ]

// 4. find average age among all data
// [
//   {
//     $group: {
//       _id: null,
//       AverageAge: {
//         $avg: "$age"
//       }
//     }
//   }
// ]

// // 5 group people by age
// [
//   {
//     $group: {
//       _id: "$age"
//     }
//   }
// ]

// 5. group people by age and count
// [
//   {
//     $group: {
//       _id: "$age"
//     }
//   },
// {
//   $count: "Age"
// }
// ]

// // 6. group people by gender and calculate average of all group
// [
//   {
//     $group: {
//       _id: "$gender",
//       averageAge: {
//         $avg: "$age"
//       }
//     }
//   }
// ]

// 7. group the user by gender and count users in each group
// [
//   {
//     $group: {
//       _id: "$gender"
//     }
//   }
// ]

// 8. List the favorite fruits among users and count also find for each group.
// [
//   {
//     $group: {
//       _id: "$favoriteFruit",
//       count: {
//         $sum: 1
//       }
//     }
//   }
// ]


// // 8. List the top 5 most common favorite fruits among users.
// [
//   {
//     $group: {
//       _id: "$favoriteFruit",
//       count: {
//         $sum: 1
//       },
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   },
//   {
//     $limit: 2
//   }
// ]

// 9. Find the total number of males and females.
// [
//   {
//     $group: {
//       _id: "$gender",
//       count: {
//         $sum: 1
//       }
//     }
//   }
// ]

// [
//   {
//     $group: {
//       _id: "$gender",
//       count: {
//         $count: "$gender"
//       }
//     }
//   }
// ]


// 4. Which country has the highest number of registered users ?
// [
//   {
//     $group: {
//       _id: "$company.location.country",
//     count: {
//       $sum: 1
//     }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   },
//   {
//     $limit: 2
//   }
// ]

// // 5. List all eye color present in the collection ?
// [
//   {
//     $group: {
//       _id: "$eyeColor",
//       count: {
//         $sum: 1
//       }
//       }
//     }
// ]

// Dealing with arrays in aggregation
// 6. What is the average number of tags per user
// 1st way
// [
//   {
//     $unwind: {
//       path: "$tags"
//     }
//   },
//   {
//     $group: {
//       _id: "$_id",
//       numberOfTags: {
//         $sum: 1
//       }
//     }
//   }
// ]

[
  {
    $unwind: {
      path: "$tags",
    },
  },
  {
    $group: {
      _id: "$_id",
      numberOfTags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      averageTags: {
        $avg: "$numberOfTags",
      },
    },
  },
][
  // 2nd way

  ({
    $addFields: {
      numberOfTags: {
        $size: { $ifNull: ["$tags", []] },
      },
    },
  },
  {
    $group: {
      _id: null,
      avgTags: {
        $avg: "$numberOfTags",
      },
    },
  })
];


// Match and project pipeline
// 7. How many users have 'enim' as one of their tags ?

[
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "usersWithEnimTag",
  },
];

// 8. what are the names and age of users who are inactive and have 'velit' as a tag ?

[
  {
    $match: {
      isActive: false,
      tags: "velit",
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
      _id: 0,
    },
  },
];

// 9. How many users have a phone number starting with '+1(940)'?
[
  {
    $match: {
      "company.phone": { $regex :/^\+1 \(940\)/},
    },
  },
  {
    $count: "Users",
  },
];

// Match all operators of aggregation
// 10. who has registered the most recently ?
[
  {
    $sort: {
      registered: -1,
    },
  },
  {
    $limit: 4,
  },
  {
    $project: {
      name: 1,
      registered: 1,
      favoriteFruit: 1,
    },
  },
];

// 11. categorize users by their favorite fruit
[
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "$name",
      },
    },
  },
];

// 12. how many users have 'ad' as the second tag in their list of tags?

[
  {
    $match: {
      "tags.1": "ad",
    },
  },
  {
    $count: "usersWithTagAD",
  },
][
  // 13. Find users who have both 'enim' and 'id' as their tags.

  // [
  //   {
  //     $match: {
  //       tags: {
  //         $all: ["enim", "id"]
  //       }
  //     }
  //   }
  // ]

  ({
    $match: {
      tags: {
        $all: ["enim", "id"],
      },
    },
  },
  {
    $count: "Total Users",
  })
][
  // 13. list all companies located in the USA with their corresponding user count.

  ({
    $match: {
      "company.location.country": "USA",
    },
  },
  {
    $group: {
      _id: "$company.title",
      userCount: {
        $sum: 1,
      },
    },
  })
][
  // Lookup in Mongodb aggregation
  // [
  //   {
  //     $lookup: {
  //       from: "authors",
  //       localField: "author_id",
  //       foreignField: "_id",
  //       as: "author_details"
  //     }
  //   }
  // ]

  // [
  //   {
  //     $lookup: {
  //       from: "authors",
  //       localField: "author_id",
  //       foreignField: "_id",
  //       as: "author_details"
  //     }
  //   },
  //   {
  //     $addFields: {
  //       author_details: {
  //         $first: '$author_details'
  //       }
  //     }
  //   }
  // ]

  ({
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "author_details",
    },
  },
  {
    $addFields: {
      author_details: {
        $arrayElemAt: ["author_details", 0],
      },
    },
  })
]






[
  // 6. What is the average number of tags per user
  // // [
  // //   {
  // //     $unwind: {
  // //       path: "$tags"
  // //     }
  // //   },
  // //   {
  // //     $group: {
  // //       _id: "$_id",
  // //       numberOfTags: {
  // //         $sum: 1
  // //       }
  // //     }
  // //   }
  // // ]

  // [
  //   {
  //     $unwind: {
  //       path: "$tags"
  //     }
  //   },
  //   {
  //     $group: {
  //       _id: "$_id",
  //       numberOfTags: {
  //         $sum: 1
  //       }
  //     }
  //   },
  //   {
  //     $group: {
  //       _id:null,
  //       averageTags: {
  //         $avg: "$numberOfTags"
  //       }
  //     }
  //   },
  // ]

  // [
  //   {
  //     $addFields: {
  //       numberOfTags: {
  //         $size: {$ifNull: ["$tags", []]}
  //       }
  //     }
  //   },
  //   {
  //     $group: {
  //       _id: null,
  //       avgTags: {
  //         $avg: "$numberOfTags"
  //       }
  //     }
  //   }
  // ]

  // 7.
  // [
  //   {
  //     $match: {
  //       tags: "enim"
  //     }
  //   },
  //   {
  //     $count: 'usersWithEnimTag'
  //   }
  // ]

  // [
  //   {
  //     $match: {
  //       isActive: false, tags: "velit"
  //     }
  //   },
  //   {
  //     $project: {
  //       name: 1, age: 1, _id: 0
  //     }
  //   }
  // ]

  // [
  //   {
  //     $match: {
  //       "company.phone": {$regex :/^\+1 \(940\)/}
  //     }
  //   },
  //   {
  //     $count: 'Users'
  //   }
  // ]

  // [
  //  {
  //    $sort: {
  //      registered: -1
  //    }
  //  },
  //   {
  //     $limit: 4
  //   },
  //   {
  //     $project: {
  //       name: 1, registered: 1, favoriteFruit: 1
  //     }
  //   }
  // ]

  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "$name",
      },
    },
  }
];

// [
//   {
//     $match: {
//       "tags.1": "ad"
//     }
//   },{
//     $count: 'usersWithTagAD'
//   }
// ]

// // [
// //   {
// //     $match: {
// //       tags: {
// //         $all: ["enim", "id"]
// //       }
// //     }
// //   }
// // ]

// [
//   {
//     $match: {
//       tags: {
//         $all: ["enim", "id"]
//       }
//     }
//   }, 
//   {
//     $count: "Total Users"
//   }
// ]


[
  {
    $match: {
      "company.location.country": "USA"
    }
  },
  {
    $group: {
      _id: "$company.title",
      userCount: {
        $sum: 1
      }
    }
  }
]

