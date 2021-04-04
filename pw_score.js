function printScore()  {
    const pw = document.getElementById('pwinput').value;

    document.getElementById("result").innerText = check(pw);
}

function check(str){
    var length = str.length;
    const set = new Set(str);
    var setval;
    var duplicate = 0;

    var big = false;
    var small = false;
    var num = false;
    var special = false;

    var i = 0;
    for(i in str){
        if(str[i].match(/[A-Z]/)){
            big = true;
        }
        if(str[i].match(/[a-z]/)){
           small = true;
        }
        if(str[i].match(/[0-9]/)){
            num = true;
        }
        if(str[i].match(/[!@#$%^&*]/)){
            special = true;
        }
        if(length !== set.size){
            setval = (length - set.size);
            if(setval <= 1){
                duplicate = 1
            }
            else if(setval >= 2){
                duplicate = 2
            }
            else{
                duplicate = 3
            }
        }
    }

    if(duplicate >= 2){
        if(length <= 8){
            return "매우 매우 쉬움"
        }
        else if(length <= 12 || length > 8){
            if(small == true){
                if(num == true){
                    if(big == true){
                        if(special == true){
                            return "보통"
                        }
                        return "쉬움"
                    }
                    return "매우 쉬움"
                }
                return "매우 쉬움"
            }
            return "매우 쉬움"
        }
        else{
            if(small == true){
                if(num == true){
                    if(big == true){
                        if(special == true){
                            return "어려움"
                        }
                        return "보통"
                    }
                    return "쉬움"
                }
                return "쉬움"
            }
            return "쉬움"
        }
    }
    else if(duplicate == 1){
        if(length <= 8){
            return "매우 쉬움"
        }
        else if(length <= 12 || length > 8){
            if(small == true){
                if(num == true){
                    if(big == true){
                        if(special == true){
                            return "어려움"
                        }
                        return "보통"
                    }
                    return "쉬움"
                }
                return "쉬움"
            }
            return "쉬움"
        }
        else{
            if(small == true){
                if(num == true){
                    if(big == true){
                        if(special == true){
                            return "어려움"
                        }
                        return "어려움"
                    }
                    return "보통"
                }
                return "보통"
            }
            return "보통"
        }
    }
    else if(duplicate == 0){
        if(length <= 8){
            return "쉬움"
        }
        else if(length <= 12 || length > 8){
            if(small == true){
                if(num == true){
                    if(big == true){
                        if(special == true){
                            return "어려움"
                        }
                        return "보통"
                    }
                    return "보통"
                }
                return "쉬움"
            }
            return "쉬움"
        }
        else{
            if(small == true){
                if(num == true){
                    if(big == true){
                        if(special == true){
                            return "매우 어려움"
                        }
                        return "어려움"
                    }
                    return "보통"
                }
                return "보통"
            }
            return "보통"
        }
    }
}