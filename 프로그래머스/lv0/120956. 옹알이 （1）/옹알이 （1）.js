function solution(babbling) {
    let bab = ["aya", "ye", "woo", "ma"];
    let count =0;
    let a =[];
    for(let i = 0 ; i< 4; i++){
            a.push(bab[i]);
        for(let j=0; j< 4; j++){
            if(i!=j){
                a.push(bab[i]+bab[j])
            }
            for(let k=0; k < 4; k++){
                if(i!=j&&j!=k&&k!=i){
                    a.push(bab[i]+bab[j]+bab[k])     
                }
                for(let b = 0 ; b< 4 ; b++){
                    if(i!=j&&j!=k&&k!=b&&b!=i&&j!=b&&k!=i){
                        a.push(bab[i]+bab[j]+bab[k]+bab[b])
                    }
                }
            }
        }
    }
    for(let s =0; s<a.length-1; s++){
        if(babbling.includes(a[s])){
            count++
        }
    }
    return count;
}