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

## 최빈값 구하기
```Java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int solution(int[] array) {
        // max는 지금까지 발견된 가장 많은 공통된 숫자를 카운트, answer는 지금까지 발견된 최빈값을 뜻
        int max = 0;
        int answer = 0;
        // 카운트 하기에 좋은 건 Map 인터페이스를 사용해보자. value값과 key값을 활용해 카운트하기에 적절하다
        Map<Integer, Integer> map = new HashMap<>();
        // 배열에서 하나씩 꺼내서 arrays에 담는다
        for(int arrays : array) {
            // 현재 숫자에서 arrays에 있는 값을 가져오고 +1을 해서 count에 저장
            // 이때 처음나왔다면 0을 가져와서 +1이 된다
            int count = map.getOrDefault(arrays, 0) + 1;
            // 이때 지금까지 나온 숫자 중에 가장 많이 나왔다면 가장 많은 최빈값인 max에 넣고, answer에는 해당 숫자를 넣어준다.
            if(count > max) {
                max = count;
                answer = arrays;
            // 만약 max와 count한 숫자가 동일하다면 answer는 -1로 설정
            } else if(count == max) {
                answer = -1;
            }
            // 지금 숫자 arrays의 새로운 개수를 map에 저장
            // array에 들어가 있는 수를 전부 꺼낼때 까지 반복
            map.put(arrays, count);
        }
        // 최종값을 반환, 여러개 일경우 -1을 반
        return answer;
    }
}
```
## 피자 나눠먹기1
```Java
class Solution {
    public int solution(int n) {
        // Math.ceil을 그냥 쓰면 정수가 나온다. 예를 들어 0.1의 계산을 하면 0.0으로 계산이 된다. 때문에 아래와 같이 double로 형변환을 해야 소수점이 발생하여 정상적으로 ceil을 할 수 있다.
        int pizza = (int)Math.ceil((double) n / 7);
        return pizza;
    }
}
```
## 피자 나눠먹기2
```java
// 최소공배수를 찾아서 풀면 된다
// 유클리드 호제법을 이용해서 풀면 된다고 하지만 잘 모르는 관계로...
class Solution {
    public int solution(int n) {
        int pizza = 0;
        // 1부터 입력된 n과 6의 최대공약수를 검사하면서 최소공약수를 찾아냄
        for(int i = 1; i <= n * 6; i++) {
            if(i * 6 % n == 0) {
                pizza = i;
                break;
            }
        }
        return pizza;
    }
}
```
## 수열과 구간3
```java
class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        // arr[i]의 값을 저장하기 위해 x라는 변수를 만든다
        int x = 0;
        for(int i = 0; i < queries.length; i++) {
            // arr[queries[i][0]]은
            // arr[쿼리 값(예를 들어 [1, 4][2, 3]라 했을 때 i의 배열에 0번 인덱스, 반복문 맨 처음에 올 i는 0이므로 0번 배열의 0번 인덱스, 맨 처음 값인 1을 넣는 것)]
            x = arr[queries[i][0]];
            // arr의 배열에 있는 것을 넣는다
            arr[queries[i][0]] = arr[queries[i][1]];
            // x의 값에 넣어둔 것을 다시 집어넣어 바꾼다
            arr[queries[i][1]] = x;
        }
        return arr;
    }
}
```
