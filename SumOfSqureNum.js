function isSumExists(num){

    for(let i = 0;i<=Math.floor(Math.sqrt(num));i++){

        for(let j = i;j<=Math.floor(Math.sqrt(num));j++){

            if(i**2 + j**2 === num){
                return true
            }
        }
    }
    return false
}

console.log(isSumExists(25))