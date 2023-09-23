
//*********** ----- 605. Can Place Flowers ----- **************


var canPlaceFlowers = function(flowerbed, n) {
    
    let len = flowerbed.length;
    let counter=0;

    for(let i=0;i<len;i++){

        if(flowerbed[i-1] != 1 && flowerbed[i] != 1 && flowerbed[i+1] != 1){
            counter++;
            i=i+1;
         }
         
    }
    if(counter >= n){
        return true;
    }
    return false;
};
console.log(canPlaceFlowers([0,1,0,0,0],1));