document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById("typingText");
    
    function typeText() {
        const text = typingText.getAttribute("data-text");
        typingText.innerHTML = "";
        
        for (let i = 0; i < text.length; i++) {
            setTimeout(function() {
                typingText.innerHTML += text.charAt(i);
            }, i * 50);
        }
        
        setTimeout(function() {
            glitchText();
        }, text.length * 50);
    }

    function glitchText() {
        typingText.classList.add("glitch");
    }

    // Start the typing effect
    setTimeout(function() {
        typeText();
    }, 1000);
});
