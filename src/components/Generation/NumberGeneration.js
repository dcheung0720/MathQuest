export const NumberGenerations = (lower,  upper, isDecimal, rounding)=>{
    let randomNum = lower + Math.random() * (upper - lower);

    if (!isDecimal){
        return Math.floor(randomNum);
    }
    else{
        return Math.round(randomNum * Math.pow(10 , rounding))/ Math.pow(10, rounding)
    }
}

export const FractionGeneration = () =>{

}