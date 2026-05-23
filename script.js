// Array of funny jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and now it won't stop sending me Kit-Kat ads.",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call a fake noodle? An impasta!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the cookie go to the doctor? Because it felt crumbly!",
    "What's the best thing about Switzerland? I don't know, but their flag is a big plus!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the math book look sad? Because it had too many problems!",
    "What do you call a boomerang that doesn't come back? A stick!",
    "Why can't you hear a pterodactyl going to the bathroom? Because the 'P' is silent!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call a sleeping bull? A dozer!",
    "Why did the chicken go to the séance? To talk to the other side!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't we ever tell secrets on a farm? Because the potatoes have eyes, the corn has ears, and the beans stalk!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did the wall say to the other wall? I'll meet you at the corner!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What's the difference between a poorly dressed man on a bicycle and a well-dressed man on a tricycle? Attire!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a pig that does karate? A pork chop!",
    "Why did the student eat his homework? Because the teacher said it was a piece of cake!",
    "What do you call a fish wearing a bowtie? Sofishticated!"
];

// Get DOM elements
const jokeText = document.getElementById('jokeText');
const newJokeBtn = document.getElementById('newJokeBtn');

// Keep track of the last joke to avoid repeats
let lastJokeIndex = -1;

// Function to get a random joke
function getRandomJoke() {
    let randomIndex;
    
    // Make sure we don't get the same joke twice in a row
    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
    } while (randomIndex === lastJokeIndex);
    
    lastJokeIndex = randomIndex;
    return jokes[randomIndex];
}

// Function to display a new joke
function displayNewJoke() {
    const joke = getRandomJoke();
    jokeText.textContent = joke;
}

// Event listener for the button
newJokeBtn.addEventListener('click', displayNewJoke);

// Allow Enter key to get a new joke
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        displayNewJoke();
    }
});
