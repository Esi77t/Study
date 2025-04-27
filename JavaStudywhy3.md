코딩테스트</br>
문제 참고해서 푼거 다시 정리하기</br>
## 합성수 찾기
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
## 최대값 찾기(1)
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
## 팩토리얼
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
## 모음제거
```Java
// replaceAll(해당글자를, 이것으로 대체한다);
// 이걸로 쓰면 된다
class Solution {
    public String solution(String my_string) {
        String answer = my_string;
        String[] aeiou = {"a", "e", "i", "o", "u"};
        for(String a : aeiou) {
            answer = answer.replaceAll(a, "");
        }
        
        return answer;
    }
}
```
## 문자열 정렬하기(1)
```Java
import java.util.*;

class Solution {
    public int[] solution(String my_string) {
        int[] answer = {};
        // 문자열을 제거한 것, []는 정규표현식
        String[] arr = my_string.replaceAll("[a-z]", "").split("");
        
        answer = new int[arr.length];    // 제거한 문자열 길이 생성
        
        for(int i = 0; i < arr.length; i++) {
            // 하나씩 꺼내서 정수로 변환
            answer[i] = Integer.parseInt(arr[i]);
        }
        // 정렬
        Arrays.sort(answer);
        
        return answer;
    }
}
```
## 소인수분해
```Java
import java.util.*;

class Solution {
    public int[] solution(int n) {
        List<Integer> list = new ArrayList<>();
        // 자연수 n의 소인수를 구하기 위한 반복문
        for(int i = 2; i <= n; i++) {
            // 나누어 떨어지면 소인수
            // 몫이 2 이상인 경우도 있기 때문에 안나눠질 때 까지 나눔
            if(n % i == 0) {
                while(n % i == 0) {
                    n /= i;
                }
                // 구한 소인수는 list에 넣는다
                list.add(i);
            }
        }
        // 소인수 갯수와 같은 사이즈로
        int[] answer = new int[list.size()];
        // 구한 것을 반복문을 돌려 배열에 넣는다
        for(int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }
        
        return answer;
    }
}
```
