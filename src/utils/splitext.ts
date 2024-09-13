// create a function that splites a string into a list of chars, words, or lines depending on the type without using any external libraries.
//
// @param text - the text to split
// @param type - the type of split to perform
// @returns the split text
//
export default function splitext(text: string, type: 'chars' | 'words' | 'lines') {

    if (type === 'chars') {
        return text.split('');
    }
    if (type === 'words') {
        return text.split(' ');
    }
    if (type === 'lines') {
        return text.split('\n');    
    }
    return [];

    }   
