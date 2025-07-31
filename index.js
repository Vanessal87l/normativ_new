//////1
// let obj={
//     name:"Vanessa",
//     nomer:87778,
//     fCar:"BMW",
//     deep(){
//         console.log(this.name);
//     }
// }
// obj.deep();

///////2
// let obj={
//     a:15,
//     b:10,
// yuza(){
//       return   this.a*this.b;
// }
// };
// console.log("yuzasi--->"+obj.yuza())


////////3
// let obj={
//     soliq:20,
//     kamunal:12,
//     prava:980,
//     havo:3,
//     qancaKotarildi(){
//         return this.soliq+this.havo+this.prava+this.kamunal+15;
//     }
// };
// console.log(obj.qancaKotarildi())

//////////4
// let obj={
//     Salim:50,
//     Vali:87,
//     Ali:12
// };
// delete obj.Vali;
// console.log(obj);

////////5
//  let obj= {
//     olma:7,
//     mandarin:4,
//     apelsin:1,
//     banan:6
// };
// for(let res in obj){
//     if(obj[res] % 2 === 1){
//      delete obj[res];
//     }
// }
// console.log(obj);


//////////7-normativ/////////////
/////1/////
// let obj={
//     Salim:25,
//     Ali:17,
//     Malika:21
// };
//  for (let [key,value] of Object.entries(obj)){
//     console.log(`${key}: ${value+2}`);
// }


/////2/////
// let users=[
//     {name:"Ali",age:20},
//     {name:"Vali",age:25},
//     {name:"Sami",age:22}];
//
//  users.map(x=> console.log(x.name,x.age));

//////3///////
// let obj={
//     a:10,
//     b:"hello",
//     c:5,
//     d:true
// };
// for(let key in obj) {
//     if (typeof obj[key] != "number") {
//         delete obj[key];
//     }
// }
// console.log(obj);


/////4////////
// let obj={
//     name:"Lola",
//     age:null,
//     job:"Teacher",
//     city:null
// };
// for(let key in obj) {
//     if (obj[key] == null) {
//         delete obj[key];
//     }
// }
// console.log(obj);


/////5////
// let obj=[
//     {name:"Ali", age:17},
//     {name:"Vali", age:18},
//     {name:"Sami", age:21}];
// let res=obj.filter(x=>x.age>=18)
// console.log(res);



