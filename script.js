function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "YOUTUBER"
]
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

// Function to download resume
function downloadResume() {
    const resumeLink = document.createElement('a');
    resumeLink.href = 'resume/resume.pdf'; // Path to your resume file
    resumeLink.download = 'resume.pdf'; // Name for the downloaded file
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
}

// Add event listener to the hire me button when the window loads
window.onload = function() {
    typeWriter(); // Start the typewriter effect
    
    // Add click event to the hire me button
    const hireButton = document.querySelector('.btn button');
    if (hireButton) {
        hireButton.addEventListener('click', downloadResume);
    }
};