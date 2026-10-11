//22
const movie = {
id: 41,
title: "Orbit",
genre: "Sci-Fi",
rating: 8.4
};

//א.
const {title, genre,rating}= movie;

//ב.
console.log(`${title} | ${genre} | ${rating}`)

//ג.
//Orbit, Ocean
const recommendedMovies = ["Orbit", "Ocean","Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);

//23
const user = {
  id: 7,
  name: "Dana Levi",
  email: "dana@example.com",
  isActive: true
};

//א.
const formatUser= ({name, email})=> {return `${name} - ${email}`};
console.log(formatUser(user));

//ג.
const getUserStatus=  (name, isActive)=>
{
    if (isActive){
        return `${name} active`
    }
    else {
        return `${name} not active`
    }
}

//ד.
//לא

//24
const player = {
  id: 1,
  nickname: "Noni",
  score: 1200,
  level: 8
};

const comments = [
  { id: 1, user: "Noa", text: "Great game!", likes: 12 },
  { id: 2, user: "Dan", text: "Well played", likes: 7 }
];

const newComment = {
  id: 3,
  user: "Maya",
  text: "Amazing score!",
  likes: 0
};

//א.
const updatedPlaye= {...player, score: 1350};

//ב.
const commentsAfterAdd= []
