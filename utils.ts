import { LoyaltyUser, Permissions } from './enums.ts'
import { Review } from './interfaces.ts'

const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');


export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser){                      //setting parameters to be passed
    const loyaltyIcon = LoyaltyUser.GOLD_USER ? '🌞' : '🔴';
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value)           //innerHTML of h5 tag is expecting a string  && swopping value toString
                                    + '| last reviewed by ' + reviewer           //pushing a string value
                                    + ' ' + loyaltyIcon;
}


export function populateUser(isReturning: boolean, userName: string){
    if(isReturning == true){
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}


export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
 }

 export function makeMultiple(value: number) : string {
    if(value > 1 || value == 0){
        return 's'
    } else return ''
 }

 export function getTopTwoReviews(reviews : Review[]) : Review[] {
    const sortedReviews = reviews.sort( (a, b) => b.stars - a.stars)
    return sortedReviews.slice(0,2)
 }