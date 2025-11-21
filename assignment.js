/**
 * Secret Santa Assignment System
 * Handles random assignment generation, storage, and retrieval
 */

// List of all participants (must match the names in the dropdown)
const participants = [
    "Emma Thompson",
    "Michael Chen",
    "Sarah Martinez",
    "James Wilson",
    "Priya Patel",
    "David Kim",
    "Lisa Anderson",
    "Marcus Johnson",
    "Rachel Foster",
    "Alex Rodriguez",
    "Nina Kowalski",
    "Tom Bradley",
    "Olivia Wright",
    "Chris Murphy",
    "Maya Gupta"
];

// DOM Elements
const nameSelect = document.getElementById('nameSelect');
const getAssignmentBtn = document.getElementById('getAssignmentBtn');
const assignmentResult = document.getElementById('assignmentResult');
const recipientName = document.getElementById('recipientName');
const resetBtn = document.getElementById('resetBtn');

// LocalStorage key
const STORAGE_KEY = 'secretSantaAssignments';

/**
 * Generate Secret Santa assignments
 * Ensures no one gets themselves and everyone is assigned exactly once
 */
function generateAssignments() {
    let assignments = {};
    let givers = [...participants];
    let receivers = [...participants];
    
    // Shuffle receivers array
    shuffleArray(receivers);
    
    // Assign each giver a receiver, ensuring no self-assignments
    for (let i = 0; i < givers.length; i++) {
        let giver = givers[i];
        let receiverIndex = 0;
        
        // Find a valid receiver (not themselves)
        for (let j = 0; j < receivers.length; j++) {
            if (receivers[j] !== giver) {
                assignments[giver] = receivers[j];
                receivers.splice(j, 1);
                break;
            }
        }
        
        // If we couldn't find a valid receiver, regenerate
        if (!assignments[giver]) {
            return generateAssignments();
        }
    }
    
    return assignments;
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Get or create assignments from localStorage
 */
function getAssignments() {
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (stored) {
        return JSON.parse(stored);
    } else {
        const newAssignments = generateAssignments();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newAssignments));
        return newAssignments;
    }
}

/**
 * Display the assignment for the selected person
 */
function showAssignment() {
    const selectedName = nameSelect.value;
    
    if (!selectedName) {
        alert('Please select your name from the dropdown!');
        return;
    }
    
    // Get assignments
    const assignments = getAssignments();
    const recipient = assignments[selectedName];
    
    // Display the result
    recipientName.textContent = recipient;
    assignmentResult.style.display = 'block';
    
    // Scroll to result
    assignmentResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Add confetti effect (optional enhancement)
    createConfetti();
}

/**
 * Reset all assignments (Admin function)
 */
function resetAssignments() {
    const confirmed = confirm(
        'Are you sure you want to reset all Secret Santa assignments? ' +
        'This will generate completely new assignments for everyone!'
    );
    
    if (confirmed) {
        localStorage.removeItem(STORAGE_KEY);
        assignmentResult.style.display = 'none';
        nameSelect.value = '';
        alert('All assignments have been reset! New assignments will be generated.');
    }
}

/**
 * Create confetti animation effect
 */
function createConfetti() {
    const colors = ['#c41e3a', '#165b33', '#f4c430', '#ffffff'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);
        
        // Animate confetti falling
        const duration = Math.random() * 3 + 2;
        const rotation = Math.random() * 360;
        const xMovement = (Math.random() - 0.5) * 100;
        
        confetti.animate([
            {
                transform: `translateY(0px) translateX(0px) rotate(0deg)`,
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight}px) translateX(${xMovement}px) rotate(${rotation}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

/**
 * Verify assignments are valid (for testing)
 */
function verifyAssignments(assignments) {
    const givers = Object.keys(assignments);
    const receivers = Object.values(assignments);
    
    // Check no self-assignments
    for (let giver in assignments) {
        if (giver === assignments[giver]) {
            console.error('Self-assignment found:', giver);
            return false;
        }
    }
    
    // Check all participants are givers
    if (givers.length !== participants.length) {
        console.error('Not all participants are givers');
        return false;
    }
    
    // Check all participants are receivers exactly once
    const receiverSet = new Set(receivers);
    if (receiverSet.size !== participants.length) {
        console.error('Duplicate receivers found');
        return false;
    }
    
    console.log('✅ Assignments are valid!');
    return true;
}

// Event Listeners
getAssignmentBtn.addEventListener('click', showAssignment);
resetBtn.addEventListener('click', resetAssignments);

// Allow Enter key to submit
nameSelect.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        showAssignment();
    }
});

// Initialize: Verify stored assignments are valid
const currentAssignments = getAssignments();
verifyAssignments(currentAssignments);

// Log assignments to console for testing (remove in production)
console.log('Current Secret Santa Assignments:', currentAssignments);
console.log('To reset assignments, click the reset button or run: localStorage.removeItem("secretSantaAssignments")');
