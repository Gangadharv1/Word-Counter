document.getElementById('countButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const words = textInput.match(/\w+/g); // Match words using regex
    const wordCount = words ? words.length : 0;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Total Words: ${wordCount}</p>
    `;
});