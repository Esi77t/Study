코딩테스트</br>
문제 참고해서 푼거 다시 정리하기</br>

## 분수의 덧셈</br>
```Java
class Solution {
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {

        // 분수의 덧셈
        int numer = numer1 * denom2 + numer2 * denom1;
        int denom = denom1 * denom2;

        // 최대 공약수 찾기
        int num = 1;
        
        for(int i = 1; i <= numer && i <= denom; i++) {
            if(numer % i == 0 && denom % i == 0) {
                num = i;
            }
        }

        // 최대 공약수 찾은거 가지고 약분하기
        numer = numer / num;
        denom = denom / num;

        // 값 반환
        int[] answer = {numer, denom};
        return answer;
    }
}
```
## 배열의 두배
```Java
class Solution {
    public int[] solution(int[] numbers) {
        // 사이즈를 모를때는 매개변수에 들어간 배열의 길이를 알수 있는 length를 쓰자
        int[] answer = new int[numbers.length];
        
        for(int i = 0; i < numbers.length; i++) {
            answer[i] += numbers[i] * 2;
        }
        return answer;
    }
}
```
