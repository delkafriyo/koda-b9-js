// id int, title str, image, str, genre array of string, cast array of object berupa

let movie = {
  id: 1,
  title: "Marvel",
  image: "bdsh098",
  genre: ["Action", "Comedy"],
  cast: [
    { name: "Robert ", role: "Main" },
    { name: "Christ", role: "figure" },
  ],

  getMovie() {
    return `Tittle : ${this.title}
Image : ${this.image}
Genre : ${this.genre}`;
  },

  getCast() {
    console.log("List Pemeran :");
    for (let i = 0; i < this.cast.length; i++) {
      console.log(`${i + 1}. ${this.cast[i].name}`);
    }
    return;
  },

  setTittle(newTitle) {
    if (typeof newTitle === "string") {
      this.title = newTitle;
      return "Tittle already changed";
    }

    return "Please input tittle with STRING!";
  },

  setImage(newImage) {
    if (typeof newImage === "string") {
      this.image = newImage;
      return "Image already changed";
    }

    return "Please input image with STRING!";
  },
};

console.log(movie.getMovie());
movie.getCast();
console.log(movie.setTittle("Warkop"));
console.log(movie.setImage("sjadhs908"));
console.log(movie.getMovie());
