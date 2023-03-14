
    function getMaxSubSum(arr){
        let maxSum = 0;
        for (let i = 0, arrLength = arr.length; i < arrLength; i++ ){
            let sum = 0;
            for(j = i; j < arrLength; j++){
                sum += arr[j];
                maxSum = Math.max(maxSum, sum); 
            }
        }
        return maxSum;
    }
