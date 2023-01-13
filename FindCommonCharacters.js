/*
[문제 설명]
문자열 배열 arr가 있습니다. 이 문자열들의 공통된 문자를 오름차순으로 출력하는 함수, solution을 완성해주세요.
예를 들어, arr ['apple', 'naver']가 있을 때,
공통된 문자는 ['a', 'e'] 입니다.

[제한 사항]
- 공통 문자는 중복 없이 출력합니다.

[입력 형식]
- arr는 길이가 1 이상 100 이하의 문자열 배열입니다.
- arr의 요소 s는 길이가 1 이상 1,000 이하인 문자열입니다.
- s는 영어 소문자로 이루어져 있습니다.

[출력 형식]
- 공통된 문자를 오름차순으로 출력합니다.
*/

function solution(arr) {
  let n1 = new Map();
  let n2 =  new Map();

  for (let str of arr[0]) {
    n1.set(str, (n1.get(str) || 0) + 1);
  }
  arr.shift();

  for (let s of arr) {
    for (let str of s) {
      if (!n1.has(str) || n1.get(str) === 0) continue;
      n2.set(str, (n2.get(str) || 0) + 1);
      n1.set(str, n1.get(str) - 1);
    }
    n1 = n2;
    n2 = new Map();
  }

  let answer = [];
  for (let [key, value] of n1) {
    for (let i = 0; i < value; i++) {
        if (!answer.includes(key)){
            answer.push(key);
        }
    }
  }
  let result = new Set(answer);
  const uniqueArr = Array.from(result);

//   let result = answer.sort(function(a,b) {
//  return a-b;
//    });
  return uniqueArr.sort();
}
