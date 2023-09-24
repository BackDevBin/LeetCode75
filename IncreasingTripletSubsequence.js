//  ************ 334. Increasing Triplet Subsequence ************

var increasingTriplet = function (nums) {
    
    let f = Infinity;
    let s = Infinity;

   
    for (let i = 0; i < nums.length; i++){

        if(nums[i] <= f) {

            f= nums[i];

        }else if(nums[i] <= s){

            s= nums[i];

        }else{
            return true;
        }

    }

    return false;
    

};

console.log(increasingTriplet([1,2,3,4,5])); // true
