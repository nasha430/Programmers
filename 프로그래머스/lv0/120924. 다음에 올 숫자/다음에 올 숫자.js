function solution(common) {
    let a = common[1]-common[0]
    let b = common[2]-common[1]
    let c = common[1]/common[0]
    let d = common[2]/common[1]
    if(a===b){
        let length = common.length
        common.push(common[length-1]+a)
    }else if(c===d){
        let length = common.length
        common.push(common[length-1]*c)
    }
    answer = common[common.length-1]
    return answer;
}