const flag = true;

export async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        if(flag) {
            setTimeout(function() { 
                resolve("Resolved"); 
            }, 3000);
        } else {
            setTimeout(function() { 
                reject("Reject"); 
            }, 3000);
        }
    });

    const result = await myPromise;
    console.log(result);
}