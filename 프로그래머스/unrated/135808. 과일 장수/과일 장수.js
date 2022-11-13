function solution(k, m, score) {
    let b = []
    let c = 0
    score.sort(function(a, b){
               return b-a;
               });
    let a = Math.floor(score.length/m)
    for(let i = 0 ; i < a; i++){
        
           b= score.slice(i*m,(i+1)*m)
        
        b.sort(function(a, b){
            return a-b;
        });
        
        c += b[0]*m
    }
    let answer = c;
    return answer;
}