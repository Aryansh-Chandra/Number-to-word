const numberToWords = (num) => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['', 'thousand', 'million', 'billion'];

    if (num === 0) return 'zero';

    let words = '';

    const getChunkWords = (chunk) => {
        let chunkWords = '';
        if (chunk >= 100) {
            chunkWords += ones[Math.floor(chunk / 100)] + ' hundred ';
            chunk %= 100;
        }
        if (chunk >= 10 && chunk < 20) {
            chunkWords += teens[chunk - 10] + ' ';
        } else if (chunk >= 20) {
            chunkWords += tens[Math.floor(chunk / 10)] + ' ';
            chunk %= 10;
        }
        if (chunk > 0) {
            chunkWords += ones[chunk] + ' ';
        }
        return chunkWords.trim();
    };

    let scaleIndex = 0;
    while (num > 0) {
        let chunk = num % 1000;
        if (chunk > 0) {
            words = getChunkWords(chunk) + ' ' + scales[scaleIndex] + ' ' + words;
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }

    return words.trim();
};


document.getElementById('convertButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    if (numberInput === '') {
        result.textContent = 'Please enter a number!';
        return;
    }

    
    if (isNaN(numberInput)) {
        alert('Please enter only numbers!');
        return;
    }

    const number = parseInt(numberInput, 10);
    result.textContent = numberToWords(number);
});