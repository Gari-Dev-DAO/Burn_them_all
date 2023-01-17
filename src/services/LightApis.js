const recipient = '4URY4JyjfWse9ajnQCwJtN2rswqkb9LDL68t8weyv1BY';
const amount = '1'

// Trigger popup widget
export const Transfer = ()=>{

window.open(
    `https://dev.widget.lightprotocol.com?token=${'SOL'}&recipient=${recipient}&amount=${amount}`,
    '_blank', // https://dev.widget.lightprotocol.com for devnet
    `left=0,top=0,width=500,height=700`,
); 

}
//used to get window popup for transfer

// Define amount in lamports


// Trigger popup widget
export const createSheild = ()=>{window.open(
    ` https://widget.lightprotocol.com?a=shield&token=${'SOL'}&amount=${amount}`,
    '_blank', // https://dev.widget.lightprotocol.com for devnet
    `left=0,top=0,width=500,height=700`,
); }

export const fetchBalance =()=>{ window.open(
    `https://widget.lightprotocol.com?a=balance`, // https://dev.widget.lightprotocol.com? for devnet
    '_blank',
    `left=0,top=0,width=500,height=700`,
); }

export const getBalanceinWeb=async()=>{
    var privateBalance;
    let result = await new Promise((resolve, reject) => {
        window.onmessage = (event) => {
          if (event.origin === 'https://widget.lightprotocol.com') {
          // https://dev.widget.lightprotocol.com for devnet
            if (event.data.amount) {
              console.log('Balance: ', event.data.amount); // lamports as String
              privateBalance = Number(event.data.amount); //
            } else {
              console.log('Ignoring external event.');
            }
          }
        };
      
        // Handle premature popup close
        var timer = window.setInterval(function () {
        //   if (popupWindow.closed) {
        //     window.clearInterval(timer);
        //     reject('Popup closed.');
        //   }
        }, 1000);
      });
}

export const getStatusinWeb=async()=>{
let result = await new Promise((resolve, reject) => {
    window.onmessage = (event) => {
      if (event.origin === 'https://widget.lightprotocol.com') {
        // https://dev.widget.lightprotocol.com for devnet
        if (event.data.amount && event.data.recipient) {
          if (
            event.data.recipient === recipient &&
            Number(event.data.amount) === Number(amount)
          ) {
            if (event.data.unshieldSuccess) {
              resolve(true);
            } else {
              reject('Unshielding failed.');
            }
          } else {
            reject('Wrong recipient or amount.');
          }
        } else if (event.data.unshieldSuccess === false && event.data.message) {
          // This will enter if anything goes wrong inside the widget, i.e. no shielded funds,...
          // you can choose to handle these events
          // i.e. close popoup: popupWindow.close()
          // and print event.data.message next to the button.
          console.log(event.data.message);
        } else {
          console.log('Ignoring external event.');
        }
      }
    };
  
    
  // Handle popup close
    var timer = window.setInterval(function () {
    //   if (popupWindow.closed) {
    //     window.clearInterval(timer);
    //     reject('Popup closed.');
    //   }
    }, 1000);
    
  })};