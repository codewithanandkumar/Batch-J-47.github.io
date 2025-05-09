document.addEventListener('contextmenu', function (e) {
    alert("these features are blocked!")
    e.preventDefault();
});


document.addEventListener('keydown', function (e) {
    // Prevent Ctrl+C, Ctrl+X, Ctrl+U, Ctrl+S, etc.
    if (e.ctrlKey && ['c', 'x', 'u', 's'].includes(e.key.toLowerCase())) {
        alert("copy and paste options are disable ")
        e.preventDefault();
    }

    // Prevent F12 (DevTools)
    if (e.key === 'F12') {
        alert('these features are blocked!')
        e.preventDefault();
    }
});