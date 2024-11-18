const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');


export function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean){                      //setting parameters to be passed
    const loyaltyIcon = isLoyalty ? '🌞' : '🔴';
    reviewTotalDisplay.innerHTML = 'review total' + value.toString()            //innerHTML of h5 tag is expecting a string  && swopping value toString
                                    + '| last reviewed by' + reviewer           //pushing a string value
                                    + ' ' + loyaltyIcon;
}



export function populateUser(isReturning: boolean, userName: string){
    if(isReturning == true){
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
