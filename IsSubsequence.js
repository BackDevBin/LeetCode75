
// **** 392. Is Subsequence ****


var isSubsequence = function(s, t) {

    let cnt =0;

    for(let i=0; i<t.length;i++ ){


     //console.log(t[i],"=",s[cnt]);
        if(t[i] === s[cnt]){
        
            cnt++;

        }

    }

    return cnt === s.length;
    
};

console.log(isSubsequence("abc","ccahbgd"));