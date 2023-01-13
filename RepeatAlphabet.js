/*
[문제 설명]
S는 알파벳으로 이루어진 문자열 입니다.
해당 문자열에서 2회 이상 연속해서 나오는 알파벳을 소거 합니다.
소거한뒤에 나온 문자열에서 다시 연속해서 나오는 알파벳을 소거하는 작업을 더이상 작업할 것이 없을 때 까지 반복합니다.
이때 최종 문자열이 완전히 소거되어 빈 문자열이라면 1을 리턴하고 알파벳이 남아있으면 0을 리턴하는 함수를 작성하세요.

[입력]
문자열 S

[출력]
조건 수행후 문자열이 비어있다면 1, 남아있다면 0
*/

function solution(S) {
    let arr = [];
    let result = 0;
    for(let i=0;i<S.length;i++){
       arr.push(S[i]);
       if(arr[arr.length-1]===arr[arr.length-2]){
           arr.pop();
           arr.pop();
       }
    }
    if (arr == 0) {
        result = 1;
    }
    return result;
}
