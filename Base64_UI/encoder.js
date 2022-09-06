
function base64Encoding(){

    // Step : 1 Accept string Input
    let inputString=document.getElementById("textinput").value;

    // Split Characters
    let splitString=inputString.split("")

    // Get ASCII Decimals
    let ASCIICodes=splitString.map((char)=>char.charCodeAt());

    // Converting decimal ASCII to binary
    let binaryCodes=ASCIICodes.map((num)=>num.toString(2));
    
    let binaryCode8Bit=binaryCodes.map((bin)=>{
        while(bin.length<8){
            bin="0"+bin
        }
        return bin;
    })


    let oneBinary=binaryCode8Bit.join("").split("")

    // Spliting in 6 bits
    let binaryCode6Bit=[]
    while(oneBinary.length!=0){
        binaryCode6Bit.push(oneBinary.splice(0,6).join(""))
    }

    // Padding and add =
    let lastElement=binaryCode6Bit[binaryCode6Bit.length - 1]
    if(lastElement.length!=6){
        var counter = 0
        while(lastElement.length<6){
            lastElement = lastElement+"0"
            counter++
        }
        binaryCode6Bit[binaryCode6Bit.length-1]=lastElement
    }

    let bintodecimal=binaryCode6Bit.map((str)=>parseInt(str,2))

    let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // Decimal to Base 64:-
    let base64final=bintodecimal.map((dec)=>base64[dec])
    if(counter==2){
        base64final.push("=")
    }else if(counter==4){
        base64final.push("==")
    }

    let finalBase64String=base64final.join("")
    let abc = document.getElementById("newtext");
    abc.innerText = finalBase64String;
}