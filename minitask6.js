const data = { id: 1, meta: { author: "Jane", tags: ["js", "es6"] } };

const {
  id,
  meta: { author },
  meta: {
    tags: [tag1],
  },
} = data;
console.log(id, author, tag1);
