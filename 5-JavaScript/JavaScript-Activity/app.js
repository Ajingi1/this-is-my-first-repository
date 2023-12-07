let score  = parseInt(prompt("Enter the score"));

if (score >= 90) {
    console.log("The Grade for Score" , score ,"is: 'A'" );
} else if(score >= 80 && score <= 89){
    console.log("The Grade for Score" , score ,"is: 'B'" );
}else if(score >= 70 && score <= 79){
    console.log("The Grade for Score" , score ,"is: 'C'" );
}else if(score >= 60 && score <= 69){
    console.log("The Grade for Score" , score ,"is: 'D'" );
}else{
    console.log("The Grade for Score" , score ,"is: 'F'" );
}