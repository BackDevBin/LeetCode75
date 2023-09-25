//  ************* 283. Move Zeroes **************


var moveZeroes = function(nums) {

    let cnt =0,j=0;

    for(let i=0;i<nums.length;i++){

        if(nums[i] !== 0){

            nums[j] = nums[i];
            j++;

        }else{
            cnt++;
        }
    }

    for(let i=nums.length-cnt;i<nums.length;i++){

        nums[i] = 0;

    }

    return nums;
    
};
console.log(moveZeroes([1,0,0,1]));