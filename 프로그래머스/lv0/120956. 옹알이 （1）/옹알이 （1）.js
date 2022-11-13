//1. 기본발음 bab 배열로 최대 한번씩 발음하여 만들 수 있는 전체 배열 생성
//2. 전체배열과 문제에서 주는 babbling배열과 비교 => count++

function solution(babbling) {
    let bab = ["aya", "ye", "woo", "ma"];                //기본 발음 배열
    let count =0;
    let a =[];
    for(let i = 0 ; i< 4; i++){
            a.push(bab[i]);                              // 1자리 발음 배열
        for(let j=0; j< 4; j++){
            if(i!=j){                                   // # : [0,1,2,3] 인덱스로 최대 1번씩을 분기
                a.push(bab[i]+bab[j])                   // 2자리 발음 배열
            }
            for(let k=0; k < 4; k++){
                if(i!=j&&j!=k&&k!=i){                   // #과 동일
                    a.push(bab[i]+bab[j]+bab[k])         // 3자리 발음 배열
                }
                for(let b = 0 ; b< 4 ; b++){
                    if(i!=j&&j!=k&&k!=b&&b!=i&&j!=b&&k!=i){ // #과 동일
                        a.push(bab[i]+bab[j]+bab[k]+bab[b]) // 4자리 발음 배열
                    }
                }
            }
        }
    }
    for(let s =0; s<a.length-1; s++){       // 전체 배열 과 비교할 a의 길이를 반복
        if(babbling.includes(a[s])){        // 전체 배열과 주어진 발음 비교
            count++                         // 동일하다면 count++
        }
    }
    return count;
}













