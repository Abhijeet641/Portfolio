// Hamburger menu functions
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "YOUTUBER"
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Enhanced Resume Download Function
function downloadResume() {
    console.log('Attempting to download resume...');
    
    // Try multiple possible paths
    const pathsToTry = [
        'resume/resume.pdf',
        './resume/resume.pdf',
        '/resume/resume.pdf',
        'resume.pdf',
        'https://github.com/Abhijeet641/Abhijeet641.github.io/raw/main/resume/resume.pdf'
    ];

    let downloadSuccessful = false;

    pathsToTry.forEach(path => {
        if (!downloadSuccessful) {
            try {
                const link = document.createElement('a');
                link.href = path;
                link.download = 'Abhijeet_Kumar_Singh_Resume.pdf';
                link.target = '_blank';
                
                // Special handling for GitHub Pages
                if (window.location.host.includes('github.io')) {
                    const repoName = window.location.pathname.split('/')[1] || '';
                    link.href = `/${repoName}/resume/resume.pdf`;
                }

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                console.log(`Download attempted with path: ${path}`);
                downloadSuccessful = true;
            } catch (error) {
                console.error(`Error with path ${path}:`, error);
            }
        }
    });

    // Final fallback if all attempts fail
    if (!downloadSuccessful) {
        console.log('Using direct GitHub raw content as fallback');
        window.open('https://github.com/Abhijeet641/Abhijeet641.github.io/raw/main/resume/resume.pdf', '_blank');
    }
}

// Initialize typewriter effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});