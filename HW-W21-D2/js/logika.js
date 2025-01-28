async function loadSavedText() {
    let savedText = localStorage.getItem('savedText')
    if (savedText) document.getElementById('textInput').value = savedText;
}

document.addEventListener('DOMContentLoaded', loadSavedText)

document.getElementById('saveBtn').addEventListener('click', () => {
    localStorage.setItem('savedText', document.getElementById('textInput').value)
})

document.getElementById('clearBtn').addEventListener('click', () => {
    localStorage.removeItem('savedText')
    document.getElementById('textInput').value = '';
})