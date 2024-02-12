function greeting(hour,name){
   console.clear();
if(hour >=6 && hour < 12){
    console.log(`Good Morning ${name}!`);
} else if(hour >= 12 && hour <= 17){
    console.log('Good Afternoon!');
} else {
    console.log('Good night!');
}
}