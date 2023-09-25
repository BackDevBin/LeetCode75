

var compress = function(chars) {

    let len = chars.length;
    let cnt =1;
    let com =0;

    for(let i=1;i<=len;i++){ 
        
        if(chars[i-1] === chars[i] ){
            cnt++;
        }else{

          chars[com] =chars[i-1];
          com++;
          if(cnt>1){
            let cntChar = cnt.toString().split("");
            for(let i=0;i<cntChar.length;i++){
              
              chars[com] =cntChar[i];
              com++;
            }
            cnt =1;
          }
        }
    }
    
    
    
    return com;
};


console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));