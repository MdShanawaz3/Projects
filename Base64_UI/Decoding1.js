function Base64Decoding() {

  let Base64String = document.getElementById("textinput").value;
  let SplitString = Base64String.split(""); 
  
  let Base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  
  let regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/

  if (regex.test(Base64String)) {
    let value = [];
    for (let i = 0; i < SplitString.length; i++) {
      for (let j = 0; j < Base64.length; j++) {
        if (SplitString[i] == Base64[j]) {
          value.push(Base64.indexOf(Base64[j]));
        }
      }
    }
    
    let binaryCodes = value.map((num) => num.toString(2));
    
    for (let i = 0; i < binaryCodes.length; i++) {
      let n = "0";
      while (binaryCodes[i].length < 6) {
        binaryCodes[i] = n + binaryCodes[i];
      }
    }
    
    let Binaryone = binaryCodes.join("").split("");
    
    let binary8Bit = [];
    while (Binaryone.length != 0) {
      binary8Bit.push(Binaryone.splice(0, 8).join(""));
    }
    
    let BinarytoDecimal = binary8Bit.map((num) => parseInt(num, 2));
    console.log("Decimals:- ", BinarytoDecimal);
    let lastElement = BinarytoDecimal[BinarytoDecimal.length - 1];
    let sum = 0;
    for (let i = 0; i < lastElement; i++) {
      sum += lastElement[i];
    }
    if (sum == 0) {
      BinarytoDecimal.pop();
    }
    let charcters = BinarytoDecimal.map((num) => String.fromCharCode(num));
    
    let final = charcters.join("");
    document.getElementById("newtext").innerText = final;
  }
   else {
    document.getElementById("newtext").innerText = "Invalid";
  }
}