// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotal(value: number, reviewer: string){                      //setting parameters to be passed
    reviewTotalDisplay.innerHTML = 'review total' + value.toString()            //innerHTML of h5 tag is expecting a string  && swopping value toString
                                    + '| last reviewed by' + reviewer           //pushing a string value
                                    ;
}

showReviewTotal(reviews.length, reviews[0].name);                               //calling back function to display