// ************ 345. Reverse Vowels of a String *********************


var reverseVowels = function(s) {

    let len = s.length;
    let vowel = ['a','e','i' ,'o' ,'u', 'A', 'E' , 'U' , 'I', 'O'];
    let sArr = s.split('');

   let j=len-1;

   for(let i=0;i<len;i++){

    if(vowel.indexOf(s[i]) !== -1){

       while(i<j){

        if(vowel.indexOf(s[j]) !== -1){

            [sArr[i],sArr[j]] = [sArr[j],sArr[i]];
            j--;
            break;

        }
        j--;

       }

    }

   }



    return sArr.join('');  
};

console.log(reverseVowels("Tide-net safe, soon, Allin. A manilla noose fastened it."));