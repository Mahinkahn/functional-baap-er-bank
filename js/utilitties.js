function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElemenValuetById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElemenValueString = textElement.innerText;
    const textElementValue = parseFloat(textElemenValueString);
    return textElementValue;
}

function setTextElemenValuetById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}