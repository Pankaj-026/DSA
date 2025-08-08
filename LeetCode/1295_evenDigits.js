+(

    function (nums) {

        let count = 0
        for (let i = 0; i < nums.length; i++) {
            let k = 0;
            let x = nums[i];

            while (x > 0) {
                x = Math.floor(x / 10)
                k += 1
            }

            if (k % 2 === 0) {
                count++
            }
        } 

        return count
    }
)([12, 345, 2, 6, 7896]) 