#include <stdio.h>
#include <string.h>

int main(){
    char A[51]={0};
    scanf("%s", A);
    
    strcat(A,"?\?!");
    printf("%s", A);
   return 0; 
}