
// ************ ------ 1431. Kids With the Greatest Number of Candies ------ **********



var kidsWithCandies = function(candies, extraCandies) {

    let n = candies.length;
    let maxCandies = 0;
    let arr =[];

    for(let i=0; i<n;i++){
    if(candies[i]> maxCandies){
        maxCandies = candies[i];
    }
    }

    for(let i=0; i<n;i++){

        if(candies[i]+extraCandies >= maxCandies){
            arr.push(true);
        }else{
            arr.push(false);
        }
        }


    return arr;
};

console.log(kidsWithCandies([12,1,12],10));