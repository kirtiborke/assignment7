const backspaceCompare = (S, T) => { 
    return edit(S) === edit(T); //return true or false
    
    function edit(str) {
        let result = '';
        let backspaces = 0;
        
        for (let i = str.length - 1; i >= 0; i -= 1) {        
            if (str[i] === '#') {
                backspaces += 1;
            } else if (backspaces > 0) {
                backspaces -= 1;
            } else {
                result = str[i] + result;
                console.log(result)
            }
        }
        
        return result;
    }
};
console.log(backspaceCompare('ab#c','ad#c'))

/**ab#c
res = c



***/