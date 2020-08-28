const maxAccuracy = 7;

export const setResultAccuracy = (res: any) =>{
    let resArr = res.toString().split(".");
    if(resArr[1]){
        if(resArr[1].length>maxAccuracy){
            return res.toFixed(maxAccuracy)
        }
        else{
            return res;
        }
    }
    else{
        return res;
    }
}