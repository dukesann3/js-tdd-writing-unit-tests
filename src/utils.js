// Your code here
export function pointsForWord(word){
    let points = 0;
    const wordArr = word.split('');
    wordArr.forEach((letter) => {
        if(['a','e','i','o','u'].includes(letter)){
            points ++;
        }
        else if(letter){
            points = points + 2;
        }
    })
    return points;
}
