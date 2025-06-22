const isMomHappy = true;

const willIGetNewPhone = new Promise((resolve, reject) => {
        if (isMomHappy) {
            const phone = { brand: 'Samsung', color: 'black' };
            setTimeout(function() { 
                resolve(phone); 
            }, 3000);            
        } else {
            const reason = "Error";
            reject(reason);
        }
    }
);

export const askMom = () => {
    willIGetNewPhone
    .then((fulfilled) => {
        console.log(fulfilled);
    })
    .catch((error) => {
        console.log(error);
    });
};