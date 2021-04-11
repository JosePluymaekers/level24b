
async function getDadJokes() {
    try {
        const apiUrl = "https://icanhazdadjoke.com/"
        const res = await fetch('https://icanhazdadjoke.com/',
            {
                method: 'GET',
                headers: { Accept: 'application/json' }
            });
        return await res.json()


    } catch (error) {
        console.log("error")
    }
};

console.log(getDadJokes())

const base_endpoint = "https://icanhazdadjoke.com/j/"


const getJokeImage = async movieId => {
    const jokeId = data.id

    const apiUrl = `${base_endpoint}${jokeId}.png`
    const jokeByIDEndpoint = `${base_endpoint}${jokeId}.png`;
    try {
        const res = await fetch(jokeByIDEndpoint, {
            method: "GET", headers: { Accept: 'application/json' },
            mode: "no-cors",

        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

console.log(getJokeImage())

