import { getDisplayContent, setDisplayContent } from './displayHandler';

export function updateDisplay(digit) {
    // Ex 1.2 this function is called when user clicks on a digit 
    console.log('The display should update with "' + digit + '"!');
    console.log('The display content is "' + getDisplayContent() + '"');
}
