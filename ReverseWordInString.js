// **** 151. Reverse Words in a String ****

var reverseWords = function(s) {

    let sArr = s.split(' ');
    let sNew = '';

    for(let i=0;i<s.length;i++){
        if(s[i] !== ' '){
           sNew +=s[i];
        }
        if(s[i] !== ' ' &&  s[i+1] === ' '){
            let j = i+2;
            let c =0;
            while(j<= s.length-1){
                if(s[j++] !== ' '){
                    c++;
                    break;
                }
                
            }
            if(c !==0){
                sNew +=s[i+1];
            }
            
        }
    }



    return sNew.split(' ').reverse().join(' ');
    
};

console.log(reverseWords("blue is sky the"));