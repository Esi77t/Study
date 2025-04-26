코딩테스트</br>
문제 참고해서 푼거 다시 정리하기</br>
##합성수 찾기
```Java
class Solution {
    public int solution(int n) {
        int answer = 0;
        // 반복문으로 1부터 n까지 합성수를 구한다
        for(int i = 1; i <= n; i++) {
            // 카운트를 세기 위해 둠
            int count = 0;
            for(int j = 1; j <= i; j++) {
                // 반복문으로 i % j 했을 때 나누어 떨어지게 되면 true이므로 1, 아니면 0을 count해서 더한다
                count += (i % j == 0) ? 1 : 0;
            }
            // 약수가 세개 이상이면 answer에 1을 더하고 아니면 0으
            answer += (count >= 3) ? 1 : 0;
        }
        return answer;
    }
}
```
##최대값 찾기(1)
```Java
import java.util.*;

class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        // 그냥 정렬 시켜서 인덱스의 마지막 값과 그 두번째값을 구하면 된
        Arrays.sort(numbers);
        answer = (numbers[numbers.length - 1]) * (numbers[numbers.length - 2]);
        
        return answer;
    }
}
```
##팩토리얼
```Java
class Solution {
    public int solution(int n) {
        int answer = 0;
        // 팩토리얼을 담을 num, 곱해지는 수를 담을 k
        int num = 1;
        int k = 1;

        // while로 num에 k값을 곱해준다
        while(true) {
            num *= k;
            // 만약 num이 n보다 높아진다면
            if(num > n) {
                // answer에 반복문을 이용해서 더해준 k를 담아낸다.
                answer = k;
                break;
            }
            k++;
        }
        // 그리고 1이 더 많으므로 -1을 해준다
        return answer - 1;
    }
}
```
