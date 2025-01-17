/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s= String) {
    
    var arrayOfString= [];
    for(var i=0; i<=s.length - 1; i++){
        var controller= '';
        var totalSum= 0;
        if(s[i]==='V' || s[i]==='X'){
            if(s[i-1]==='I'){
                controller= s[i-1]+ s[i];
                arrayOfString.pop();
                arrayOfString.push(controller);
            } else{
                arrayOfString.push(s[i])
            }
        }else if (s[i]==='L' || s[i]==='C'){
            if(s[i-1]==='X'){
                controller= s[i-1]+ s[i];
                arrayOfString.pop();
                arrayOfString.push(controller);
            }else{
                arrayOfString.push(s[i])
            }

        }else if (s[i]==='D' || s[i]==='M'){
            if(s[i-1]==='C'){
                controller= s[i-1]+ s[i];
                arrayOfString.pop();
                arrayOfString.push(controller);
            }  else{
                arrayOfString.push(s[i])
            }
        } else {
            arrayOfString.push(s[i]);
        }
        
    } 

    for(let i=0; i<=arrayOfString.length-1; i++){
        switch(arrayOfString[i]){
            case 'I':
                totalSum+=1;
                break
            case 'IV':
                totalSum+=4;
                break
            case 'V':
                totalSum+=5;
                break
            case 'IX':
                totalSum+=9;
                break
            case 'X':
                totalSum+=10;
                break
            case 'XL':
                totalSum+=40;
                break
            case 'L':
                totalSum+=50;
                break
            case 'XC':
                totalSum+=90;
                break
            case 'C':
                totalSum+=100;
                break
            case 'CD':
                totalSum+=400;
                break
            case 'D':
                totalSum+=500;
                break
            case 'CM':
                totalSum+=900;
                break
            case 'M':
                totalSum+=1000;
                break
            
        }
    }
    return totalSum;
};


romanToInt("III");