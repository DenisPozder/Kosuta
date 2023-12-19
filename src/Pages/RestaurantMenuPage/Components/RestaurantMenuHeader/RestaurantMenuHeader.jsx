import React, { useEffect, useState } from 'react'
import './restaurant-menu-header.css'
import { MdRestaurantMenu } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import mealDecoration1 from '../../../../Assets/Restaurant/restaurantMeal3.png'
import mealDecoration2 from '../../../../Assets/Restaurant/restaurantMeal4.png'
import mealDecoration3 from '../../../../Assets/Restaurant/restaurantMeal5.png'
import mealDecoration4 from '../../../../Assets/Restaurant/restaurantMeal6.png'
import leavesLeft from '../../../../Assets/Restaurant/leavesLeft.png'
import leavesRight from '../../../../Assets/Restaurant/leavesRight.png'
import background from '../../../../Assets/Restaurant/background.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

const RestaurantMenuHeader = () => {

    const RestaurantMenuData = [
        {
            id: 1,
            title: "Predjelo",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Zakuska 'Košuta' (za 2 osobe)",
                    engTitle: "",
                    price: "1500"
                },
                {
                    id: 2,
                    title: "Njeguška pršuta",
                    engTitle: "",
                    price: "700"
                },
                {
                    id: 3,
                    title: "Goveđa pršuta",
                    engTitle: "",
                    price: "650"
                },
                {
                    id: 4,
                    title: "Svinjska pršuta",
                    engTitle: "",
                    price: "650"
                },
                {
                    id: 5,
                    title: "Tvrdi sir",
                    engTitle: "",
                    price: "450"
                },
                {
                    id: 6,
                    title: "Kajmak",
                    engTitle: "",
                    price: "500"
                },
                {
                    id: 7,
                    title: "Mladi sir",
                    engTitle: "",
                    price: "400"
                },
                {
                    id: 8,
                    title: "Pečurke na žaru",
                    engTitle: "",
                    price: "450"
                },
                {
                    id: 9,
                    title: "Proja",
                    engTitle: "",
                    price: "*"
                },
                {
                    id: 10,
                    title: "Masline",
                    engTitle: "",
                    price: "*"
                },
                {
                    id: 11,
                    title: "Cezar salata",
                    engTitle: "",
                    price: "750"
                },
            ]
        },
        {
            id: 2,
            title: "Čorbe",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Teleća čorba",
                    engTitle: "",
                    price: "320"
                },
                {
                    id: 2,
                    title: "Supa pileća",
                    engTitle: "",
                    price: "*"
                },
                {
                    id: 3,
                    title: "Riblja čorba",
                    engTitle: "",
                    price: "270"
                },
            ]
        },
        {
            id: 3,
            title: "Pečenje",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Jagnjeće pečenje sa ražnja ( 1kg )",
                    engTitle: "",
                    price: "*"
                },
                {
                    id: 2,
                    title: "Praseće pečenje ( 1kg )",
                    engTitle: "",
                    price: "*"
                },
                {
                    id: 3,
                    title: "Teleće pečenje ispod sača - porcija ( prilog pekarski krompir )",
                    engTitle: "",
                    price: "1600"
                },
                {
                    id: 4,
                    title: "Jagnjeće pečenje ispod sača - porcija",
                    engTitle: "",
                    price: "*"
                },
            ]
        },
        {
            id: 4,
            title: "Varivo",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Pomfrit",
                    engTitle: "",
                    price: "350"
                },
                {
                    id: 2,
                    title: "Krompir ispod sača",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 3,
                    title: "Grilovano povrće",
                    engTitle: "",
                    price: "550"
                },
                {
                    id: 4,
                    title: "Kuver",
                    engTitle: "",
                    price: "100"
                },
            ]
        },
        {
            id: 5,
            title: "Jela sa roštilja",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Ćevapi ( prilog pomfrit )",
                    engTitle: "",
                    price: "750"
                },
                {
                    id: 2,
                    title: "Pljeskavica ( prilog pomfrit )",
                    engTitle: "",
                    price: "750"
                },
                {
                    id: 3,
                    title: "Ćevapi na kajmaku ( prilog pomfrit )",
                    engTitle: "",
                    price: "820"
                },
                {
                    id: 4,
                    title: "Pljeskavica u kajmaku ( prilog pomfrit )",
                    engTitle: "",
                    price: "820"
                },
                {
                    id: 5,
                    title: "Gurmanska pljeskavica ( prilog pomfrit )",
                    engTitle: "",
                    price: "850"
                },
                {
                    id: 6,
                    title: "Bela vešalica ( prilog pomfrit )",
                    engTitle: "",
                    price: "900"
                },
                {
                    id: 7,
                    title: "Dimljeni vrat ( prilog pomfrit )",
                    engTitle: "",
                    price: "900"
                },
                {
                    id: 8,
                    title: "Ražnjići svinjski ( prilog pomfrit )",
                    engTitle: "",
                    price: "800"
                },
                {
                    id: 9,
                    title: "Leskovački uštipci ( prilog pomfrit )",
                    engTitle: "",
                    price: "800"
                },
                {
                    id: 10,
                    title: "Svinjski file na žaru ( prilog pomfrit )",
                    engTitle: "",
                    price: "900"
                },
                {
                    id: 11,
                    title: "Domaća dimljena kobasica ( prilog pomfrit )",
                    engTitle: "",
                    price: "780"
                },
                {
                    id: 12,
                    title: "Mešano meso 800g ( prilog pomfrit )",
                    engTitle: "",
                    price: "1450"
                },
                {
                    id: 13,
                    title: "Dimljena vešalica ( prilog pomfrit )",
                    engTitle: "",
                    price: "900"
                },
            ]
        },
        {
            id: 6,
            title: "Jela od bifteka",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Tatar biftek ( za 2 osobe )",
                    engTitle: "",
                    price: "2100"
                },
                {
                    id: 2,
                    title: "Biftek na žaru",
                    engTitle: "",
                    price: "2400"
                },
                {
                    id: 3,
                    title: "Ramstek ( pomfrit, grilovano povrće )",
                    engTitle: "",
                    price: "1800"
                },
            ]
        },
        {
            id: 7,
            title: "Sosovi",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Sos od pečuraka",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 2,
                    title: "Tartar sos",
                    engTitle: "",
                    price: "170"
                },
            ]
        },
        {
            id: 8,
            title: "Jela od pilećeg mesa",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Pileći file na žaru",
                    engTitle: "",
                    price: "760"
                },
                {
                    id: 2,
                    title: "Pileći batak ( prilog pomfrit )",
                    engTitle: "",
                    price: "700"
                },
                {
                    id: 3,
                    title: "Piletina sa mlincima i mileramom",
                    engTitle: "",
                    price: "900"
                },
                {
                    id: 4,
                    title: "Pileći file pohovan sa susamom ( prilog pomfrit )",
                    engTitle: "",
                    price: "850"
                },
                {
                    id: 5,
                    title: "Pileći file u četiri vrste sira ( prilog pomfrit )",
                    engTitle: "",
                    price: "860"
                },
            ]
        },
        {
            id: 9,
            title: "Jela po porudžbini",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Punjena vešalica ( prilog pomfrit )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 2,
                    title: "Rolovana vešalica u slanini ( prilog pomfrit )",
                    engTitle: "",
                    price: "1050"
                },
                {
                    id: 3,
                    title: "Karađordeva šnicla ( prilog pomfrit, tartar sos )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 4,
                    title: "Bečka šnicla ( prilog pomfrit )",
                    engTitle: "",
                    price: "800"
                },
                {
                    id: 5,
                    title: "Pariska šnicla ( prilog pomfrit )",
                    engTitle: "",
                    price: "900"
                },
                {
                    id: 6,
                    title: "Natur šnicla ( prilog pomfrit )",
                    engTitle: "",
                    price: "850"
                },
                {
                    id: 7,
                    title: "Medaljoni u sosu od pečuraka ( prilog pomfrit )",
                    engTitle: "",
                    price: "950"
                },
                {
                    id: 8,
                    title: "Plava traka ( prilog pomfrit )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 9,
                    title: "Dimljena svinjska rebra u kajmaku ( prilog pekarski krompir )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 10,
                    title: "Doručak ( prilog pomfrit )",
                    engTitle: "",
                    price: "450"
                },
            ]
        },
        {
            id: 9,
            title: "Riba",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Fileti dimljene pastrmke ( prilog blitva, bareni krompir )",
                    engTitle: "",
                    price: "1170"
                },
            ]
        },
        {
            id: 10,
            title: "Salate",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Srpska salata",
                    engTitle: "",
                    price: "370"
                },
                {
                    id: 2,
                    title: "Šopska salata",
                    engTitle: "",
                    price: "390"
                },
                {
                    id: 3,
                    title: "Cvekla",
                    engTitle: "",
                    price: "*"
                },
                {
                    id: 4,
                    title: "Grčka salata",
                    engTitle: "",
                    price: "440"
                },
                {
                    id: 5,
                    title: "Vitaminska salata",
                    engTitle: "",
                    price: "340"
                },
                {
                    id: 6,
                    title: "Zelena salata",
                    engTitle: "",
                    price: "290"
                },
                {
                    id: 7,
                    title: "Paradajz salata",
                    engTitle: "",
                    price: "340"
                },
                {
                    id: 8,
                    title: "Paradajz salata sa sirom",
                    engTitle: "",
                    price: "390"
                },
                {
                    id: 9,
                    title: "Krastavac salata",
                    engTitle: "",
                    price: "340"
                },
                {
                    id: 10,
                    title: "Ajvar ( domaci )",
                    engTitle: "",
                    price: "490"
                },
                {
                    id: 11,
                    title: "Urnebes salata",
                    engTitle: "",
                    price: "340"
                },
                {
                    id: 12,
                    title: "Ljuta paprika u ulju ( komad )",
                    engTitle: "",
                    price: "190"
                },
                {
                    id: 13,
                    title: "Kupus salata",
                    engTitle: "",
                    price: "290"
                },
                {
                    id: 14,
                    title: "Mešana sezonska salata",
                    engTitle: "",
                    price: "320"
                },
                {
                    id: 15,
                    title: "Bašta salata",
                    engTitle: "",
                    price: "900"
                },
                {
                    id: 16,
                    title: "Rotkvice",
                    engTitle: "",
                    price: "240"
                },
                {
                    id: 17,
                    title: "Mladi luk",
                    engTitle: "",
                    price: "240"
                },
                {
                    id: 18,
                    title: "Tarator",
                    engTitle: "",
                    price: "320"
                },
                {
                    id: 19,
                    title: "Paprika u ulju pečena",
                    engTitle: "",
                    price: "330"
                },
            ]
        },
        {
            id: 11,
            title: "Deserti",
            engTitle: "",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Voćna torta",
                    engTitle: "",
                    price: "390"
                },
                {
                    id: 2,
                    title: "Čokoladna torta",
                    engTitle: "",
                    price: "390"
                },
                {
                    id: 3,
                    title: "Baklava",
                    engTitle: "",
                    price: "390"
                },
                {
                    id: 4,
                    title: "Palačinke ( snikers, eurokrem, marmelada, orasi i med )",
                    engTitle: "",
                    price: "340"
                },
                {
                    id: 5,
                    title: "Tulumba",
                    engTitle: "",
                    price: "340"
                },
                {
                    id: 6,
                    title: "Sladoled ( kugla )",
                    engTitle: "",
                    price: "100"
                },
                {
                    id: 7,
                    title: "Urmašice",
                    engTitle: "",
                    price: "340"
                },
            ]
        },
        {
            id: 12,
            title: "Crvena vina",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Vranac - Plantaže 13. jul ( 0.7l )",
                    engTitle: "",
                    price: "800"
                },
                {
                    id: 2,
                    title: "Lederer kabernet sauvingnon ( Vinarija Čoka 0,7l )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 3,
                    title: "Lederer merlot ( Vinarija Čoka 0,7l )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 4,
                    title: "Vinarija Ohrid merlot ( 0.7l )",
                    engTitle: "",
                    price: "1900"
                },
                {
                    id: 5,
                    title: "Vinarija Ohrid vranac ( 0.7l )",
                    engTitle: "",
                    price: "1900"
                },
                {
                    id: 6,
                    title: "Muštuluk crni ( Vinarija Čoka 0,7 )",
                    engTitle: "",
                    price: "1300"
                },
                {
                    id: 7,
                    title: "Radovanović cabernet ( 0.7l )",
                    engTitle: "",
                    price: "1900"
                },
                {
                    id: 8,
                    title: "Kovačević Aurelius ( 0.7l )",
                    engTitle: "",
                    price: "1900"
                },
                {
                    id: 9,
                    title: "Međaš Vino Župa ( 0.7l )",
                    engTitle: "",
                    price: "800"
                },
                {
                    id: 10,
                    title: "Lagum Merlot ( Vino Župa 0.7l )",
                    engTitle: "",
                    price: "1500"
                },
                {
                    id: 11,
                    title: "Lagum Tamjanika ( Vino Župa 0,7l )",
                    engTitle: "",
                    price: "1500"
                },
                {
                    id: 12,
                    title: "Monah 'S' Pik Oplenac ( 0.7l )",
                    engTitle: "",
                    price: "2900"
                },
                {
                    id: 13,
                    title: "Čaša vina ( 0.2l )",
                    engTitle: "",
                    price: "250"
                },
            ]
        },
        {
            id: 13,
            title: "Bela vina",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Krstaš - Plantaze 13. jul ( 0.7l )",
                    engTitle: "",
                    price: "800"
                },
                {
                    id: 2,
                    title: "Lederer Chardonnay ( Vinarija Čoka 0,7l )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 3,
                    title: "Lederer Sauvignom ( Vinarija Čoka 0,7l )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 4,
                    title: "Lederer muskat ( Vinarija Čoka 0,7l )",
                    engTitle: "",
                    price: "1000"
                },
                {
                    id: 5,
                    title: "Muštuluk beli ( Vinarija Čoka 0,7l )",
                    engTitle: "",
                    price: "1300"
                },
                {
                    id: 6,
                    title: "Vinarija Ohrid rizling ( 0,7 )",
                    engTitle: "",
                    price: "1800"
                },
                {
                    id: 7,
                    title: "Vinarija Ohrid Sauvignom ( 0.7l )",
                    engTitle: "",
                    price: "1800"
                },
                {
                    id: 8,
                    title: "Međaš Vino Župa ( 0.7l )",
                    engTitle: "",
                    price: "800"
                },
                {
                    id: 9,
                    title: "Tamjanika Vino Župa ( 0.7l )",
                    engTitle: "",
                    price: "1500"
                },
                {
                    id: 10,
                    title: "Kovacevic Chardonnay ( 0.7l )",
                    engTitle: "",
                    price: "1800"
                },
                {
                    id: 11,
                    title: "Radovanovic Chardonnay ( 0,7l )",
                    engTitle: "",
                    price: "1800"
                },
                {
                    id: 12,
                    title: "Tamjanka Spasic ( 0.7l )",
                    engTitle: "",
                    price: "1800"
                },
                {
                    id: 13,
                    title: "Malvazija Kozlović ( 0.7l )",
                    engTitle: "",
                    price: "2800"
                },
            ]
        },
        {
            id: 14,
            title: "Roze vina",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Rubin ( 0.7l )",
                    engTitle: "",
                    price: "900"
                },
                {
                    id: 2,
                    title: "Radovanovic ( 0,7l )",
                    engTitle: "",
                    price: "1500"
                },
                {
                    id: 3,
                    title: "Kovačević ( 0,7l )",
                    engTitle: "",
                    price: "1500"
                },
                {
                    id: 4,
                    title: "Rose '10' ( Vino Župa 0,7l )",
                    engTitle: "",
                    price: "800"
                },
                {
                    id: 5,
                    title: "Lagum 'Syrah' ( Vino Župa 0,7l )",
                    engTitle: "",
                    price: "1500"
                },
                {
                    id: 6,
                    title: "Roze Vinarija Čoka ( 0,7 )",
                    engTitle: "",
                    price: "800"
                },
            ]
        },
        {
            id: 15,
            title: "Vina od voća",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Kupinovo voćno vino ( 187ml )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 2,
                    title: "Malina voćno vino ( 187ml )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 3,
                    title: "Višnja voćno vino ( 187ml )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 4,
                    title: "Aronija voćno vino ( 187ml )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 5,
                    title: "Di Luna Snagria ( 187ml )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 6,
                    title: "Di Luna Snagria White ( 187ml )",
                    engTitle: "",
                    price: "250"
                },
            ]
        },
        {
            id: 16,
            title: "Kafa i topli napici",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Espresso",
                    engTitle: "",
                    price: "240"
                },
                {
                    id: 2,
                    title: "Macchiato",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 3,
                    title: "Cappuccino",
                    engTitle: "",
                    price: "290"
                },
                {
                    id: 4,
                    title: "Kafa sa slagom",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 5,
                    title: "Ness kafa",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 6,
                    title: "Čaj",
                    engTitle: "",
                    price: "240"
                },
                {
                    id: 7,
                    title: "Ceđena pomorandža",
                    engTitle: "",
                    price: "390"
                },
                {
                    id: 8,
                    title: "Limunada",
                    engTitle: "",
                    price: "340"
                },
                {
                    id: 9,
                    title: "Kisela voda ( 0,25/1l )",
                    engTitle: "",
                    price: "240/290"
                },
                {
                    id: 10,
                    title: "Aqua viva ( 0,25/1l )",
                    engTitle: "",
                    price: "240/290"
                },
            ]
        },
        {
            id: 17,
            title: "Gazirani sokovi",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Coca cola ( 0,33l )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 2,
                    title: "Fanta ( 0,33l )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 3,
                    title: "Sprite ( 0,33l )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 4,
                    title: "Bitter Lemon ( 0,33l )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 5,
                    title: "Tonic Watter ( 0,33l )",
                    engTitle: "",
                    price: "250"
                },
            ]
        },
        {
            id: 18,
            title: "Negazirani sokovi",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Đus ( 0,25l )",
                    engTitle: "",
                    price: "270"
                },
                {
                    id: 2,
                    title: "Jagoda ( 0,25l )",
                    engTitle: "",
                    price: "270"
                },
                {
                    id: 3,
                    title: "Breskva ( 0,25l )",
                    engTitle: "",
                    price: "270"
                },
                {
                    id: 4,
                    title: "Jabuka ( 0,25l )",
                    engTitle: "",
                    price: "270"
                },
                {
                    id: 5,
                    title: "Borovnica ( 0,25l )",
                    engTitle: "",
                    price: "230"
                },
            ]
        },
        {
            id: 19,
            title: "Energetska pića",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Guarana",
                    engTitle: "",
                    price: "*"
                },
                {
                    id: 2,
                    title: "Red Bull",
                    engTitle: "",
                    price: "*"
                },
            ]
        },
        {
            id: 20,
            title: "Žestoka alkoholna pića",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Ballantine's ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 2,
                    title: "Johnny Walker ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 3,
                    title: "Chivas Regal ( 0,3l )",
                    engTitle: "",
                    price: "500"
                },
                {
                    id: 4,
                    title: "Jack Daniels ( 0,3l )",
                    engTitle: "",
                    price: "450"
                },
                {
                    id: 5,
                    title: "Tequila ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 6,
                    title: "Smirnoff ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 7,
                    title: "Absolut Vodka ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 8,
                    title: "Baileys ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 9,
                    title: "Jager ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 10,
                    title: "Gin ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 11,
                    title: "Pelinkovac - bitter liquer ( 0,3l )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 12,
                    title: "Campari ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 13,
                    title: "Martini ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 14,
                    title: "Vermut ( 0,3l )",
                    engTitle: "",
                    price: "300"
                },
                {
                    id: 15,
                    title: "Francuski konjak ( 0,3l )",
                    engTitle: "",
                    price: "500"
                },
                {
                    id: 16,
                    title: "Vodka - domaca ( 0,3l )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 17,
                    title: "Vinjak ( 0,3l )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 18,
                    title: "Ballantine's 12yrs ( 0,3l )",
                    engTitle: "",
                    price: "550"
                },
                {
                    id: 19,
                    title: "Johnny Walker - Black label ( 0,3l )",
                    engTitle: "",
                    price: "500"
                },
            ]
        },
        {
            id: 21,
            title: "Piva",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Lav pivo ( 0,33l )",
                    engTitle: "",
                    price: "260"
                },
                {
                    id: 2,
                    title: "Tuborg ( 0,33l )",
                    engTitle: "",
                    price: "290"
                },
                {
                    id: 3,
                    title: "Erdinger ( 0,33l )",
                    engTitle: "",
                    price: "350"
                },
                {
                    id: 4,
                    title: "Calsberg ( 0,33l )",
                    engTitle: "",
                    price: "350"
                },
                {
                    id: 5,
                    title: "Budweiser tamno pivo ( 0,33l )",
                    engTitle: "",
                    price: "290"
                },
                {
                    id: 6,
                    title: "Točeno Lav pivo ( 0,33l )",
                    engTitle: "",
                    price: "250"
                },
                {
                    id: 7,
                    title: "Točeno Tuborg ( 0,33l )",
                    engTitle: "",
                    price: "280"
                },
                {
                    id: 8,
                    title: "Stella Artois ( 0,33l )",
                    engTitle: "",
                    price: "390"
                },
            ]
        },
        {
            id: 22,
            title: "Rakije",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Viljamovka ( 0,3l )",
                    engTitle: "",
                    price: "280"
                },
                {
                    id: 2,
                    title: "Kajsija ( 0,3l )",
                    engTitle: "",
                    price: "280"
                },
                {
                    id: 3,
                    title: "Dunja ( 0,3l )",
                    engTitle: "",
                    price: "280"
                },
                {
                    id: 4,
                    title: "Šljiva ( 0,3l )",
                    engTitle: "",
                    price: "280"
                },
                {
                    id: 5,
                    title: "Loza ( 0,3l )",
                    engTitle: "",
                    price: "280"
                },
            ]
        },
        {
            id: 23,
            title: "Medene rakije",
            engTitle: "",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Dunja ( 0,3l )",
                    engTitle: "",
                    price: "240"
                },
                {
                    id: 2,
                    title: "Malina ( 0,3l )",
                    engTitle: "",
                    price: "240"
                },
                {
                    id: 3,
                    title: "Jabuka - cimet ( 0,3l )",
                    engTitle: "",
                    price: "240"
                },
            ]
        },
    ]

    const [ category, setCategory ] = useState("MEALS")
    const [ menu, setMenu ] = useState(RestaurantMenuData)
    const { t, i18n } = useTranslation('restaurantMenu')

    useEffect(() => {
        if (category === "MEALS") {
            const filteredItems = RestaurantMenuData.filter(menu => menu.category === 'meals')
            setMenu(filteredItems)
        }else if (category === "DRINKS") {
            const filteredItems = RestaurantMenuData.filter(menu => menu.category === 'drinks')
            setMenu(filteredItems)
        }else {
            setMenu(RestaurantMenuData)
        }
    },[category])

  return (
    <div className="restaurant-menu-header">
        {/* <img src={branchTree} alt="Dekorativna slika" className='rmh-tree1' /> */}
        <LazyLoadImage src={leavesLeft} alt="Dekorativna slika" className='rmh-leaves-left' />
        <LazyLoadImage src={leavesRight} alt="Dekorativna slika" className='rmh-leaves-right' />
        <LazyLoadImage src={background} alt="Pozadina" className='rmh-background' />
        <div className="rmh-ot"></div>
        <div className="rmh-ob"></div>
        <div className="rmh-content">
            <h1 className='rmh-h1 slide-in from-top'>restoran srpske nacionalne kuhinje</h1>
            <div className="rmhc-items fade-in">
                <div className={`rmhc-item ${category === "MEALS" ? "rmhc-item-active" : ""}`} onClick={() => setCategory("MEALS")}>
                    <h3 className='rmhc-h3'><span>{t('rmhTitle1')}</span> <MdRestaurantMenu /></h3>
                </div>
                <div className={`rmhc-item ${category === "DRINKS" ? "rmhc-item-active" : ""}`} onClick={() => setCategory("DRINKS")}>
                    <h3 className='rmhc-h3'><span>{t('rmhTitle2')}</span> <BiSolidDrink /></h3>
                </div>
            </div>
            <div className="rmhc-wrap">
                {/* <img src={branchRight} alt="Dekorativna slika" className='rmhcw-branch-right' /> */}
                <LazyLoadImage src={mealDecoration1} alt="Dekorativna slika" className='meal-decoration1' />
                <LazyLoadImage src={mealDecoration2} alt="Dekorativna slika" className='meal-decoration2' />
                <LazyLoadImage src={mealDecoration3} alt="Dekorativna slika" className='meal-decoration3' />
                <LazyLoadImage src={mealDecoration4} alt="Dekorativna slika" className='meal-decoration4' />
                <div className={`rmhcw-content`}>
                    {
                        menu.map((menuItem, index) => (
                            <div className="rmhcw-item fade-in" key={index}>
                                <h1>{i18n.language === 'sr' ? menuItem.title : menuItem.engTitle}</h1>
                                <div className="rmhcw-meal-price">
                                {
                                    menuItem.items.map((item, indexMenu) => (
                                        <div className="rmhcwm-item" key={indexMenu}>
                                            <h3>{i18n.language === 'sr' ? item.title : item.engTitle}</h3>
                                            <h2>{item.price} RSD</h2>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantMenuHeader