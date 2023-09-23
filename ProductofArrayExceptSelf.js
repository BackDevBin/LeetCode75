// ********** 238. Product of Array Except Self **********


var productExceptSelf = function(nums) {

    let answer = [];
   
    
    
    for(let i=0;i<nums.length;i++){

        let product = 1;
         
        for(let j =0;j<nums.length;j++){
            if(i !== j){
                product*=nums[j];
            }
        }
        
    
        answer.push(product);
        
    }

    return answer;
    
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));