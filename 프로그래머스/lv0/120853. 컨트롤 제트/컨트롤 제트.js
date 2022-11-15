function solution(s) {
    let a = 0;
    let b =[];
    let c = 0;
    let answer = 0
    b=s.split(" ")
    for(let i = 0; i<b.length; i++){
        if(b[i]!='Z')
            b[i]=Number(b[i])
    }
    if(b.includes('Z')){
        while(b.includes('Z')){
        a = b.indexOf('Z')
            
        b.splice(a-1, 2)
        }
    }
    for(let i = 0 ; i<b.length; i++){
        answer+=b[i]
    }
    return answer;
}