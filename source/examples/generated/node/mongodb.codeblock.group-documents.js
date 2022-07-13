const result = await plants.aggregate([
  {
    $group: {
      _id: "$type",
      numItems: { $sum: 1 },
    },
  },
  { $sort: { _id: 1 } },
]);