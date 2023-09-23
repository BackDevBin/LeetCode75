//************** 1768. Merge Strings Alternately ***************


var mergeAlternately = function (word1, word2) {

    let word3 = "";
    let n = Math.max(word1.length, word2.length);

    for (let i = 0; i < n; i++) {
        word3 += (word1[i] ?? '')+(word2[i] ?? '');
    }


    console.log(word3);

}

mergeAlternately("avrwer", "bp");

//************Another method *************/

var mergeAlternately = function (word1, word2) {

    let word3 = [];
    let n;

    if (word1.length > word2.length)
        n = word1.length;
    else
        n = word2.length;

    for (let i = 0; i < n; i++) {
        word3.push(word1[i], word2[i]);
    }

    return word3.join("");

};