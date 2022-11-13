function solution(k, m, score) {
    //score 배열 랜덤한 상품의 사과들
    let b = [] // m개씩 나눈 상품사과를 배열에 담는다.
    let c = 0 // 상자에 최하품 사과의 점수를 담는 변수
    score.sort(function(a, b){
               return b-a;
               });
    // score배열을 좋은 것 부터(내림차순) 차례로 정렬, 원본 파괴적 코딩
    let a = Math.floor(score.length/m)
    // 상자의 개수(배열의 개수) 나머지는 버린다.()
    for(let i = 0 ; i < a; i++){ // i는 배열의 길이로 쓰일 예정 a는 상자의 개수
        
           b= score.slice(i*m,(i+1)*m) //배열이 정렬되어있으므로 m상자(배열)에 넣을 만큼 잘라서 b에 담는다.
        
        b.sort(function(a, b){
            return a-b;
        });
   //b 오름차순  최하 상품등급 앞으로 정렬
        c += b[0]*m //최하 상품등급 * 상자의 개수 = 최대 이익
    }
    let answer = c;
    return answer;
}