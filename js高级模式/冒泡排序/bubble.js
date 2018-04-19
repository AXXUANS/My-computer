var arr=[2,3,5,547,6,3,67,45,2431,56];
var result=sort(arr);

function sort(arr) {
    for(var i=0 ; i < arr.length-1;i++){
        console.log("i是"+i)
        /*方法一   当i为9时 k重复1至9 arr[1~9]与arr[9]比较
        *         当i为8时 k重复1至9 arr[1~9]与arr[8]比较 */
        for (var k=1;k < arr.length;k++){
            // console.log(i)
            console.log("k是"+k)

            // var temp= arr[k];
            // arr[k]=arr[k+1]+arr[k];
            // arr[k+1]=arr[k]-arr[k+1];
            // arr[k]=arr[k]-arr[k+1];
            if(arr[i]<arr[k]){
                var temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
    /*方法一   当i为9时 k重复0至8 arr[8]<arr[8+1]比较 确定最大的值
       *      当i为8时 k重复0至7 arr[7]与arr[7+1]比较 确定倒数第二的值
       *      ............................
       *      当i为1时 k只能为0 arr[0]与arr[0+1]比较 确定最小的值*/
    // for(var i=arr.length-1 ; i > 0 ;i--){
    //     console.log("i是"+i)
    //     for (var k=0;k < i;k++){
    //         console.log("k是"+k)
    //         // var temp= arr[k];
    //         // arr[k]=arr[k+1]+arr[k];
    //         // arr[k+1]=arr[k]-arr[k+1];
    //         // arr[k]=arr[k]-arr[k+1];
    //         if(arr[k]<arr[k+1]){
    //             arr[k]=arr[k+1]+arr[k];
    //             arr[k+1]=arr[k]-arr[k+1];
    //             arr[k]=arr[k]-arr[k+1];
    //             // state.push(JSON.parse(JSON.stringify(arr)))
    //         }
    //     }
    // }
    // return arr;

}

console.log(result);