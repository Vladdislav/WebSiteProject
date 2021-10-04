"use strict"
import addScrollHeader from './headerScroll.js';


const API_cardProduct = './database.json';
const API_cardDeliveryCompanies = './dataDeliveryCompanies.json';
const API_cardDoneProject = './dataDoneProjects.json';

$(document).ready(function (){

    // $('button').click(function(){
    //     for (const key in this) {
    //         $(this).click(getCardByCategory(this.key + 1))
    //     }
    // })

    addScrollHeader();
    async function getCard(callback, buttonClickedID){
        await fetch(API_cardProduct)
        .then(responce => responce.json())
        .then(cardData => {


        let parent = document.querySelector(".slider_card");

        addCard(cardData, parent, buttonClickedID);
        callback();
        })
    };
    async function getCardDelivery(){
        await fetch(API_cardDeliveryCompanies)
        .then(responce => responce.json())
        .then(cardData => {


        let parent = document.querySelector(".colomns_left_content");

        addCardDelivery(cardData, parent);
        })
    };
    async function getCardOurWork(callback){
        await fetch(API_cardDoneProject)
        .then(responce => responce.json())
        .then(cardData => {


        let parent = document.querySelector(".slider_card_work");

        addCardWorkDone(cardData, parent);
        callback();
        })
    };

        function addSlider(){
            $('.slider_card').slick({
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                centerMode: false,
                variableWidth: true
            });
        };
        function addSliderWork(){
            $('.slider_card_work').slick({
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                centerMode: false,
                variableWidth: true
            });
        };
    getCardOurWork(addSliderWork);
    getCard(addSlider);
    getCardDelivery();

});

// function getCardByCategory(id){

//     switch(id) {
//         case '1':
//             return button.addEventListener("click", function (){
//                 getCard(addSlider,id)
//         })
//         case '2':
//             return button.addEventListener("click", function (){
//                 getCard(addSlider,id)
//         })
//         case '3':
//             return button.addEventListener("click", function (){
//                 getCard(addSlider,id)
//         })
//         case '4':
//             return button.addEventListener("click", function (){
//                 getCard(addSlider,id)
//         })
//         case '5':
//             return button.addEventListener("click", function (){
//                 getCard(addSlider,id)
//         })
//         case '6':
//             return button.addEventListener("click", function (){
//                 getCard(addSlider,id)
//         })
//         case '7':
//             return button.addEventListener("click", function (){
//                 getCard(addSlider,id)
//         })
            
//     }
// }


function addCard(cards, parent, categoryID){

    for (const key in cards) {
        if(categoryID === cards[key].clickedID){

            let CardChild = document.createElement('div');
            let card = 
            `<div class="slider_inner">\
                <div class="photo_card card ">\
                <img src="${cards[key].imageUrl}" alt="">\
                <p class="coast">${cards[key].price}</p>\
            </div>\
            <div class="description_card card">\
                <h3 class="name">${cards[key].title}</h3>\
                <p class="style">${cards[key].style}</p>\
                <p class="quantity">${cards[key].quantity}</p>\
                <p class="short_desc">${cards[key].short_desc}</p>\
            </div>\
            <div class="button_card card">\
                <div class="btn_detail btn">\
                    <a data-fancybox data-src="#modal" href="#">Подробнее</a>\
                </div>\
                <div class="btn_add_in_cart btn">\
                    <a href="#">В корзину</a>\
                </div>\
                <div class="btn_buy btn">\
                    <a href="#">Купить в клик</a>\
                </div>\
            </div>`;
            CardChild.innerHTML = card;
            parent.appendChild(CardChild);
        }
    }
}

function addCardDelivery(cards, parent){

    for (const key in cards) {
        let CardChild = document.createElement('div');
        let cardDelivery = 
        `
        <div class="delivery_list_companies">
            <div class="company">
                <img src="${cards[key].imgUrl}" alt="">
                <div class="description_company">
                    <p class="name_company">${cards[key].nameCompany}</p>
                    <p class="region_company">${cards[key].regionDelivery}</p>
                </div>
            </div>
        </div>
        `;
        
        CardChild.innerHTML = cardDelivery;
        parent.appendChild(CardChild);
        
    }
}

function addCardWorkDone(cards, parent){

    for (const key in cards) {
        let CardChild = document.createElement('div');
        let cardDelivery = 
        `
        <div class="our_work_card" style="background: url(${cards[key].img})">
            <p class="title_card_our_work">${cards[key].name}</p>
            <div class="details">
                <p class="detail_about_case">Подробнее про кейс</p> 
            </div>
            <a class="push_button" data-fancybox data-src="#modal${cards[key].popupID}" href="#">Смотреть кейс</a>
        </div>
        `;
        
        CardChild.innerHTML = cardDelivery;
        parent.appendChild(CardChild);
        
    }
}