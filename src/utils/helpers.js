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

  export const sizeTags = (string) => {
    if(string === '40'){
      return 'XS'
    }else if(string === '41'){
      return 'S'
    }else if(string === '42'){
      return 'M'
    }else if(string === '43'){
      return 'L'
    }else{
      return 'XL'
    }
  }


  const support = ( () => {
    if(!window.DOMParser) return false
    let parser = new DOMParser();
    console.log('trueeee')
    try {
      parser.parseFromString('x','text/html');
    }catch(err){
      console.log('falssseee')
      return false;
    }
    return true
  })();
  
  export const textToHTML = (str) => {
    if(support) {
      console.log('supporrrttedd')
      let parser = new DOMParser();
      let doc = parser.parseFromString(str,'text/html')
        return doc.body.innerHTML
    }
    let dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
  }