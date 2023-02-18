/*
[문제 설명]
1번부터 N번까지의 사람이 동그랗게 모여서 앉아있습니다.
1번 부터 순서를 세어 K번째 사람을 모임에서 제외시킵니다.
남은 N-1명에서 이번에 제외된 다음 사람부터 원을 따라 다시 순서를 세서 K번째 사람을 모임에서 제외하는 과정을 마지막 사람이 남을때까지 반복합니다.
이때 마지막으로 남는 사람의 번호를 구하는 프로그램을 구현하세요.

입력 형식
N: 원형으로 모여있는 사람의 수
K: 매번 제외시킬 사람의 순서

출력 형식
마지막에 남는 사람의 번호를 정수로 반환

제약 사항
1 <= N, K <= 100

입출력 예시
입력
N = 7
K = 3
출력: 4
설명: 1, 2, 3, 4, 5, 6, 7에서 시작하여, 3, 6, 2, 7, 5, 1순서로 제외되어 마지막에는 4번 사람이 남게 된다.
*/

function solution(N, K) {
    let Nlist = Array(N).fill(1).map((key, idx) => key + idx);
    let n = [];
    let cnt = 1;
    while (Nlist.length > 0) {
        let data = Nlist.shift();
        if (cnt % K == 0) n.push(data);
        else Nlist.push(data);
        cnt++;
    }
    return n.slice(-1)[0];
}


/*
결과 값
cnt = 1 / data = 1 / Nlist = [2, 3, 4, 5, 6, 7, 1]
cnt = 2 / data = 2 / Nlist = [3, 4, 5, 6, 7, 1, 2]
cnt = 3 / data = 3 / Nlist = [4, 5, 6, 7, 1, 2]		/ n = [3]
cnt = 4 / data = 4 / Nlist = [5, 6, 7, 1, 2, 4]		/ n = [3]
cnt = 5 / data = 5 / Nlist = [6, 7, 1, 2, 4, 5]		/ n = [3]
cnt = 6 / data = 6 / Nlist = [7, 1, 2, 4, 5]	  	/ n = [3, 6]
cnt = 7 / data = 7 / Nlist = [1, 2, 4, 5, 7]		  / n = [3, 6]
cnt = 8 / data = 1 / Nlist = [2, 4, 5, 7, 1]		  / n = [3, 6]
cnt = 9 / data = 2 / Nlist = [4, 5, 7, 1]	      	/ n = [3, 6, 2]
cnt = 10 / data = 4 / Nlist = [5, 7, 1, 4]    		/ n = [3, 6, 2]
cnt = 11 / data = 5 / Nlist = [7, 1, 4, 5]	     	/ n = [3, 6, 2]
cnt = 12 / data = 7 / Nlist = [1, 4, 5]			      / n = [3, 6, 2, 7]
cnt = 13 / data = 1 / Nlist = [4, 5, 1]			      / n = [3, 6, 2, 7]
cnt = 14 / data = 4 / Nlist = [5, 1, 4]			      / n = [3, 6, 2, 7]
cnt = 15 / data = 5 / Nlist = [1, 4]			        / n = [3, 6, 2, 7, 5]
cnt = 16 / data = 1 / Nlist = [4, 1]			        / n = [3, 6, 2, 7, 5]
cnt = 17 / data = 4 / Nlist = [1, 4]			        / n = [3, 6, 2, 7, 5]
cnt = 18 / data = 1 / Nlist = [4]			            / n = [3, 6, 2, 7, 5, 1]
*/
