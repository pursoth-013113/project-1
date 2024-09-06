// Ho -listing

// variable Declaration

// var Name = 'Tesla';

// let budget = 200;

// const StarLink ={
//     name: "StarLink",
//     why: "Access From Anywhere and Anytime",
//     price: 99,
//     currency: "$",
//     speed: "1 Gbps",
//     unlimited: true,
//     data: "Unlimited Data",
//     // availableCountry: ["Ant", "af", "Us" ] 
//     iinstallationDevice: {
//         deviceName: "StarLink010101",
//         deviceType: "Router",
//         deviceSpeed: "1Gbps",
//         devicePrice: 100,
//         currencyType: "dollar",
//     },

// };
//  let InternetFee = StarLink.price;

//  let devicePrice = StarLink.iinstallationDevice.devicePrice;

//  let StarLinkInstallationFee = InternetFee + devicePrice;

//  if(budget >= StarLinkInstallationFee){
//     console.log("Your Installation Ready..");
//  }else {
//     console.log("Insuffiecient Balance..");
//  }

// console.log(`Including Router =$${StarLinkInstallationFee}`); 



// const A2B={
//     name: "A2B",
//     totalProduct: 4,
//     items: 4,
//     itemsNames: {
//         itemName1: "Sweet",
//         itemName2: "Samosa",
//         itemName3: "Pakkoda",
//         itemName4: "Micture",
//     },
//     itemsPrice: {
//         itemprice1: 90,
//         itemprice2: 20,
//         itemprice3: 30,
//         itemprice4: 50,
//     },
//     purchaseperson: 8,
//     purchasequantity: 2,
//     remainingquantit: 2,

// };

// console.log(itemsName.itemsNames)


// const A2B={
//     name: {
// totalProduct: {
//      Sweet: 90,
//      Samosa: 20,
//      Pakkoda: 35,
//      Micture: 50,
// },

// itemPrice: {
//     Cake: 40,
//     plaineCake: 20,
//     venillaCake: 80,
//     IceCake: 100,
// },

// PurchasePersons: {
//     numberOfUser: 20
// },
//     }

// };

// let TotalProduct = A2B.name.totalProduct.Sweet+A2B.name.totalProduct.Samosa+A2B.name.totalProduct.Pakkoda+A2B.name.totalProduct.Micture;

// let TotalitemPrice = A2B.name.itemPrice.Cake+A2B.name.itemPrice.plaineCake+A2B.name.itemPrice.venillaCake+A2B.name.itemPrice.IceCake;


// let Total = TotalProduct + TotalitemPrice;

// let Remainingname = Total -  A2B.name.PurchasePersons.numberOfUser;

// console.log(Remainingname);


// const A2B={
//  product1:{
//     person: 20,
//     food: "Burger",
//     counts: 40,

//  },

//  product2:{
//     person: 30,
//     food: "Sandwich",
//     counts: 70,

//  },

// };

// let instaPosts=[
//     {
//       id: 1,
//       postType: "Image",
//       tag: "Tailor Akka",
//       private: false,
//       caption: "Stritch Work",
//       music: "Tailor Uncle dailouge",
//     },
//     {
//         id: 2,
//         postType: "Video",
//         tag: "couple goal",
//         private: false,
//         caption: "Endless",
//         music: "Ennachi song",
//     },
//     {
//         id: 3,
//         postType: "Video",
//         tag: "Nature",
//         private: false,
//         caption: "Nature Vibe",
//         music: "natural music",
//     },
//     {
//         id: 4,
//         postType: "Image",
//         tag: "Travel",
//         private: true,
//         caption: "Taj Mahal",
//         music: "Taj tumhara",

//     },
// ];

// let  toatalReelswatched = instaPost.length;
// console.log(`Today`);

// let mpas = instaPosts.map((e)=>{
//     if (e.private){
//         return e;
//     }
// })

// console.log(mpas);

// instaPosts.map((e)=>{
//     console.log(e);
// });

// let TotalReelsWatched = instaPosts.length;

// let publicData = [];
// let VideopublicData = [];

// let filterOutPublic = instaPosts.map((e)=>{
//     if(e.private == false){
//       publicData.push(e);
//     }
// });

// let filterVideoDatas = publicData.map((video, i)=> {
//     if (video.postType == "Video"){
//         console.log(i);
//     }
// });

// console.log(filterVideoDatas);

// const seconfhandLaptops=[
//     {
//         id: 1,
//         Brand: "ASUS",
//         model: "0808",
//         price: 40000,
//         used: true,
//         demo: false,
//     },
//     {
//         id: 2,
//         Brand: "ASUS",
//         model: "0909",
//         price: 50000,
//         used: false,
//         demo: true,
//     },
//     {
//         id: 3,
//         Brand: "HP",
//         model: "HP-001",
//         price: 25000,
//         used: false,
//         demo: true,
//     },
//     {
//         id: 4,
//         Brand: "LEN",
//         model: "HP-001",
//         price: 25000,
//         used: false,
//         demo: true,
    
//     },
// ]

// let usedLap = [];
// let demounit = [];
// const filters = seconfhandLaptops.map((Laptops,hh) => {
//     if(Laptops.demo){
//         demounit.push(Laptops);
//         demounit.push(hh);

//     }
    
//         if(Laptops.used){
//             usedLap.push(Laptops);
//         }
    
// });

// console.log("used Laptos", usedLap);
// console.log("demo Laptos", demounit);


// let budget= 350000

// const newCars =[
//     {
//       id:1,
//       Name: "BMW",
//       Model: "BMW M8",
//       Price: 24400000,
//       Color: "Black",    
//     },
//     {
//         id:2,
//         Name: "Mahindra Thar",
//         Model: "Mahindra Thar AX",
//         Price: 110000,
//         Color: "Red",   
//     },
//     {
//         id:3,
//         Name: "RANGE ROVER EVOQUE",
//         Model: "P300e",
//         Price: 6790000,
//         Color: "Blue",   
//     },
//     {
//         id:4,
//         Name: "Mercedes-Benz-GLA",
//         Model: "4-MATIC",
//         Price: 510000,
//         Color: "Orange", 
//     },

// ]

// let carsUnderPrice = []; 
// let carsAbovePrice = [];

// const filters = newCars.map((Cars,i) =>{
//     if(Cars.Price < budget){
//         carsUnderPrice.push(Cars);
        

//     }
// }
// );

// const filters2 = newCars.map((Cars,i) =>{
//     if(Cars.Price > budget){
//         carsAbovePrice.push(Cars);
        

//     }
// }
// );

// console.log("Budget Cars Price ", carsUnderPrice);
// console.log("Budget Above Cars Price ", carsAbovePrice );

// let Name = Pursothaman;

// const nameChar =[
//     {
//      id: 1,
//      a: 1,
//      b: 2,
//      c: 3,
//      d: 4,
//      e: 5,
//      f: 6,
//     },
//     {
//         g: 1,
//         h: 2,
//         i: 3,
//         j: 4,
//         k: 5,
//     },
//     {
//         l: 1,
//         m: 2,
//         n: 3,
//         o: 4,
//         p: 5,
//     },
//     {
//         q: 1,
//         r: 2,
//         s: 3,
//         t: 4,
//         u: 5,
//     },
//     {
//         v: 1,
//         w: 2,
//         x: 3,
//         y: 4,
//         z: 5,
//     },
// ]


// let countnamechar= [];
// const filter =  nameChar.map((charfilter,i) =>{
//     if(charfilter === Name ){
//         countnamechar.push(charfilter); 
//         countnamechar.push(i);

//     }
// }



// );

// // console.log("names char", countnamechar);


// for (let i =0; i< seconfhandLaptops.length; i++){
//     let elem = seconfhandLaptops[i];
//     if(elem.demo == true){
//         demounit.push(elem);
//     }
//     if(elem.used == true){
//         usedLap.push(elem);
//     }
// }

// console.log("used Laptos", usedLap);
// console.log("demo Laptos", demounit);

// const Theatre =  [
//     {
//         Movie: "RRR",
//         Ticket price: 

//     }
// ]

// const fil= seconfhandLaptops.filter((e) => e.brand == true);
// console.log(fil);

// let budget= 300;
// const girlfriend  =[
//     juiceitem={
//         juice: "Fig Juice",
//         price: 60,
//     },
//    fooditem = {
//         food: "Mushroom",
//         price: 150,
//     },
//     TimePassitem={
//         ice: "Blackcurrent",
//         price: 200,
//     }
    
// ]

// let girlfriend1 = juiceitem.price+fooditem.price+TimePassitem+price
// console.log(`budget`);

// console.log("Thaguthi eruku");
// let datas=[]
// const fetchProduct = async () => {
//     try {
//         let ApiCall = await fetch('https://dummyjson.com/products');
//         let Products = await ApiCall.json();
//         console.log(Products)
//         datas =  Products.products
//     } catch (error) {
//         console.log("Check Internet Connection");
//     }
// };

// fetchProduct();


// const findId  = datas.map((addid,i)=>{
//       if(addid.products.brand){
//         return addid;
//       }
// })


// let product =[]
// const filterCategory = async () => {
//     try{
//         let ApiCall = await fetch('https://dummyjson.com/products');
//         let products = await ApiCall.json();
//         console.log(price.products[2].price)
//         products= price.products[1]
//     } catch (error) {
//         console.log("Check Internet Connection");
//     }
// };

// filterCategory();

// const FindCategory = products.products.map((items,i)=> {
//     if(items.products.category[10]){
//         return items;
//     }

// })
// let above =[];
// const dollar = async  () => {
//     try{
//         let ApiCall = await fetch('https://dummyjson.com/products')
//         let products = await ApiCall.json();
//         console.log(products);
        
//     const filtered = products.filter((e)=> e.products.price[30].price);{
//     console.log(filtered);

// }
//     } catch (error){ 
//         console.log("Check Internet Connection");
//     }
// };

// dollar();

// function equal(x) {
//     if(x==5) {
//     console.log(true);
//     }else{
//     console.log(false);
//     }
    
// }


// equal(5)

// let sub = [absadasdasdssdasdas]

// let as= sub.sort('')

// console.log(as);

// for(i=0; i< sub.length;){
//     console.log(sub)
// }





