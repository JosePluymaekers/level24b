
const dadJoke = () => {
    const data = getDadJokes();
    const jokeHere = document.getElementById("jokeHere")
    const newH3 = document.createElement('h3');
    const H3content = document.createTextNode(
        `${data.joke}`
    );
    newH3.appendChild(H3content)
    jokeHere.appendChild(newH3);
};


dadJoke()


document.getElementById("getJoke__btn").addEventListener("click", dadJoke);




const jokeImage = () => {
    const jokeImgHere = document.getElementById("jokeImgHere")
    const data = getJokeImage()
    const jokeId = data.id
    const newLi = document.createElement('li');
    const newLink = document.createElement('a');
    const poster = document.createElement('img');

    newLink.target = '_blank';
    newLink.href = `${base_endpoint}${jokeId}.png`;
    poster.src = `${base_endpoint}${jokeId}.png`;

    newLi.appendChild(newLink).appendChild(poster);
    jokeImgHere.appendChild(newLi);
};

document.getElementById("getImgJoke__btn").addEventListener("click", jokeImage);
