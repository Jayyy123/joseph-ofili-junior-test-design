export const removeTags = (string) => {

    const checkForClosingTag = (str) => {
      let count = 0
      for(var i = 0; i <= str.length; i++){
        if(str[i] === '>'){
          return count;
        }else{
          count += 1
        }
      }
      return -1;
    }

    // const end = string.length -4
    let stringArray = [];
    for(var i = 0; i <= string.length; i ++){
      if(string[i] === '<'){
        const tagNo = checkForClosingTag(string.substring(i));
        tagNo !== -1 && (i += tagNo)
        // console.log(tagNo)
      }else{
        stringArray.push(string[i])
      }
    }
    
    return stringArray.join('').toString()
    // return string.substring(3,end)
  }