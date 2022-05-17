let text = "";
let words1 = 1;

function setValue(event) {
    if(words1 %2==0) {
        text = text + event.target.value;
        document.getElementById("textArea").value = text;
    } else {
        let text2 = event.target.value;
        text = text + text2.toLowerCase();
    
        document.getElementById("textArea").value = text;
    }
    
}

function capsLock(event) {
    words1++;
    if (words1 %2==0){
        document.getElementById("capslock").classList.add("activated");
    } else {
        document.getElementById("capslock").classList.remove("activated");
    }
}

function  newline(event) {
    text = text + "\n";
}

function backspace(event) {
    text = text.slice(0, -1);
    document.getElementById("textArea").value = text;
}

function clean(event) {
    text = text.slice(0, 0);
    document.getElementById("textArea").value = text;
}