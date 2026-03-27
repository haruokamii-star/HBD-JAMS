const envelope = document.getElementById('envelope');
const mainContent = document.getElementById('main-content');
const container = document.getElementById("balloons");
const colors = ["#ff4b4b", "#4b9eff", "#4cd137", "#fbc531", "#9c88ff"]; 

// Event Listener for the Envelope
envelope.addEventListener('click', () => {
    // 1. Open the flap
    envelope.classList.add('open');
    
    // 2. Wait a moment, then fade out the envelope and show the party
    setTimeout(() => {
        envelope.classList.add('fade-out');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('show');
        
        // 3. Start the balloon animation once the scene is visible
        startParty();
    }, 800); // 800ms gives enough time to see the flap open
});

// Function to generate balloons
function startParty() {
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        
        // Random horizontal position
        balloon.style.left = Math.random() * 90 + "vw"; 
        
        // Assign random color
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random speed and delay
        const duration = 5 + Math.random() * 5; 
        const delay = Math.random() * 2; // Shorter delay so they appear right after opening
        
        balloon.style.animationDuration = duration + "s";
        balloon.style.animationDelay = delay + "s";
        
        container.appendChild(balloon);
    }
}