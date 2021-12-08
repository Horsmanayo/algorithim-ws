let sentence = 'my very heart may just live under the ninth planet'


function countSentence(text){
    
    let sentenceLength = 0
    let noOfWords = 1
    let vowelCount = 0

    let charMap = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    }
    
    
    sentenceLength = text.length
    
    for(let i = 0; i < text.length; i++){
      if (text[i] == ' ' || text[i] == '.'){
        noOfWords += 1
      }
      if(text[i] in charMap){
          ++vowelCount
      }
    }
    return {sentenceLength, noOfWords, vowelCount}
    
    // let newSentence = Array.from(text.toLowerCase())
    // vowelCount = newSentence.filter(letter => 'aeiou'.includes(letter)).length
    // return result
    
    }
    
    console.log(countSentence(sentence))