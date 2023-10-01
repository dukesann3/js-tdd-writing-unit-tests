// Your tests here
//I expect a return of 7 for the word 'test'
import { pointsForWord } from "../utils";

describe('pointsForWord',()=>{
    it('calculates the total points for a word (1 point per vowel, 2 per consonant)', ()=>{
        const word = 'test';
        const wordPoint = pointsForWord(word);

        expect(wordPoint).toBe(7);
    })
})
