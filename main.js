document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const ip = document.querySelector('.ip-address');
    const copyButton = document.querySelector('.copy-button');

    // Attach event listener to the copy button
    copyButton.addEventListener('click', function() {
        // Create a temporary textarea element
        const textArea = document.createElement('textarea');
        textArea.value = ip.textContent;
        document.body.appendChild(textArea);
        textArea.select();

        // Copy the text to clipboard
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Display alert
        alert('IP address copied to clipboard: ' + ip.textContent);
    });
});