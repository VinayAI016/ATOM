const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing atom...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});
var na="";
var number=""
var numberDictionary = {
    "nashik": +918792211077 ,
    "varnika": +916366670560,
    "harshita": +919886903039,
    "harshitha": +919886903039,
    };

// Input sentence


var dictNames = Object.keys(numberDictionary);

// Function to extract numbers based on names mentioned in the sentence
function extractNumbers(message, numberDictionary) {
    // Split the sentence into words, omitting punctuation
    var words = message.split(/\s|[\.,\/#!$%\^&\*;:{}=\-_`~()]/).filter(Boolean);
    var numbers = [];

    // Iterate over each word
    for (var i = 0; i < words.length; i++) {
        // Iterate over each key in the dictionary
        for (var j = 0; j < dictNames.length; j++) {
            // Check if the word matches any key in the dictionary
            if (words[i] === dictNames[j]) {
                na = words[i];
                // If there's a match, add the corresponding number to the numbers array
                numbers.push(numberDictionary[dictNames[j]]);
            }
        }message
    }

    return numbers.length > 0 ? numbers : false;
}

function extractMessage(message){
    var word = message.split(/\s|[\.,\/#!$%\^&\*;:{}=\-_`~()]/).filter(Boolean);
    var me=[];
    for(var i=0; i < word.length; i++){
        if(word[i]=='that'){
            for ( var j = i+1; j < word.length ; j++){
                me.push(word[j]);
                console.log("Extracted numbers:", me);
            }
        }
    }
    return me
}

// Extract numbers from the sentence based on names in the dictionary

function takeCommand(message) {
    

    if (message.includes('hey') || message.includes('hello') ) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("initialize") || message.includes("initialise")) {
        speak("Initializing atom...");
        wishMe();
    } else if (message.includes("wish me") ) {
        wishMe();
    } else if (message.includes("open google") && message.includes("atom")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }else if (message.includes("what's your name") || message.includes("what is your name")) {
        
        speak("Hi My Name is atom!!!");
    } else if (message.includes("open youtube") && message.includes("atom")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook") && message.includes("atom")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are') && message.includes("ion")) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia') && message.includes("atom")) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace(/\b(wikipedia|atom)\b/gi, "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time') && message.includes("atom")) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date') && message.includes("atom")) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator') && message.includes("atom")) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }else if (message.includes('whatsapp')  ) {
        var x = extractNumbers(message, numberDictionary);
        var y = extractMessage(message);

// Output the extracted numbers
        console.log("Extracted numbers:", x); // Output: Extracted numbers: [1234567890, 9876543210]

        if(x!=false){
        window.location.href = "whatsapp://send?phone="+x+"&text=Hi%20"+y+"!!!!";
        const finalText = "Sending Message To "+na;
        speak(finalText);}
        else{
            window.location.href="whatsapp://";
            const finalText="Opening Whatsapp";
            speak(finalText);
        }
        
    }else if (message.includes('camera') && message.includes("atom")) {
        window.location.href = "microsoft.windows.camera:";
        const finalText = "Opening Camera";
        speak(finalText);
    }
    else if (message.includes('downloads') ) {
        window.location.href = "chrome://downloads";
        const finalText = "Opening downloads";
        speak(finalText);
    }
    else if (message.includes('viewer') && message.includes("atom")) {
        window.location.href = "com.microsoft.viewer3d:";
        const finalText = "Opening 3D Viewer";
        speak(finalText);
    }
    else if (message.includes('action center') && message.includes("atom")) {
        window.location.href = "ms-actioncenter:";
        const finalText = "Opening Action Center";
        speak(finalText);
    }
    else if (message.includes('clock') || message.includes("alarm") && message.includes("atom")) {
        window.location.href = "ms-clock:";
        const finalText = "Opening Clock";
        speak(finalText);
    }
    else if (message.includes('calendar') && message.includes("atom")) {
        window.location.href = "outlookcal:";
        const finalText = "Opening Calender";
        speak(finalText);
    }
    else if (message.includes('projection') && message.includes("atom")) {
        window.location.href = "ms-projection:";
        const finalText = "Opening Projection Settings";
        speak(finalText);
    }
    else if (message.includes('cortana') && message.includes("atom")) {
        window.location.href = "ms-cortana:";
        const finalText = "Opening Cortana";
        speak(finalText);
    }
    else if (message.includes('board') && message.includes("atom")) {
        window.location.href = "ms-whiteboard-cmd:";
        const finalText = "Opening Whiteboard";
        speak(finalText);
    }
     else if (message.includes('atom')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+","atom")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    } else {
        speak("Sorry am Not Able To get you. Please Specify my name before Giving Any Command!!");
    }
}