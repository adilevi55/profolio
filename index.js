
function copyUrl () {
    let url = window.location.toString();
   // Create new element
   var fakeInput = document.createElement('textarea');
   // Set value (string to be copied)
   fakeInput.value = url;
   // Set non-editable to avoid focus and move outside of view
   fakeInput.setAttribute('readonly', '');
   fakeInput.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(fakeInput);
   // Select text inside element
   fakeInput.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(fakeInput);
}