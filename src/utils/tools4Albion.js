
module.exports = {
    
    shortFameForSite: (obj) => {
        const arr = Object.entries(obj)
        
        for (let i = 1; i < arr.length; i++) {
            let currentValue = arr[i]
            let j
            for (j = i - 1; j >= 0 && arr[j][1] < currentValue[1]; j--) {
              arr[j + 1] = arr[j]
            }
            arr[j + 1] = currentValue
          }
        return arr;


    }

}