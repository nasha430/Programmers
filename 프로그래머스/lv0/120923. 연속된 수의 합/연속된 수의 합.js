function solution(num, total) {
    let a = Math.floor(total/num)           // 가운데 값
    let b = []                              // 들어갈 배열
    let c = 0                               // 가운데 에서 벌어진 값
    let d = 0                               // 맨 처음 값
    let e = 0                               // 맨 끝값
    let f = 0
    if(num%2 === 1){
        c= Math.floor(num/2)
        d = a-c
        e = a+c
            for(let i =d; i<e+1 ; i++){
                b.push(i)
            }
    }else{
        c=Math.floor(num/2)-1
        d= a-c
        f= Math.ceil(total/num)
        e= f+c
        for(let i=d; i<e+1; i++){
            b.push(i)
        }
    }
    answer=b
    return answer;
}