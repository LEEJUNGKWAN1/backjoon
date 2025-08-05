/*-----------------------------------------------------
Sub  : [BOJ] 3.6.9게임 박수 수 맞추기
Link : https://www.acmicpc.net/problem/17614
Level: 브론즈2
Tag  : JS
Memo
-----------------------------------------------------*/
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
//압력
const n = Number(input[0]); //입력 첫줄을 숫자형으로 받아줘
let count= 0;

function clap(n){
    for(i=1; i<=n; i++){
        //문자열로 변환하기
        const str = String(i);
        //문자열로 변환한 애들을 문자열갯수만큼 돌리기
        for(let num of str){
            if (num === '3' || num === '6' || num === '9'){
                //카운팅하기
                count++;
            }
        }
    }
    console.log(count);
}

clap(n);