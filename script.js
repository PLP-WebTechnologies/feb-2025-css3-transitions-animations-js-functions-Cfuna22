document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the user's preference
  const animationPreference = getPreference();

  // Add animation if user prefers it
  if (animationPreference === 'enabled') {
    document.getElementById('myButton').classList.add('animate');
  }

  // Button click event to toggle animation preference
  const button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    // Add animation class on click
    button.classList.add('animate');
    
    // Store the preference for future page loads
    storePreference('enabled');
  });
});


// Store user preference (e.g., if they prefer animations)
function storePreference(preference) {
  localStorage.setItem('animationPreference', preference);
}

// Retrieve user preference
function getPreference() {
  return localStorage.getItem('animationPreference');
}
