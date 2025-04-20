코딩테스트</br>
문제 참고해서 푼거 다시 정리하기 두번쨰</br>

## 순서쌍의 개수
```Java
class Solution {
    public int solution(int n) {
        int answer = 0;
        // for문을 이용해서 i에 n까지 수를 받아내서 나눈다
        // 이후 나머지가 0이라면 answer를 +1을 해준다
        // 딱 떨어지지 않는다면 순서쌍이 아니기 때문에 이렇게
        for(int i = 1; i <= n; i++) {
            if(n % i == 0) {
                answer++;
            }
        }
        return answer;
    }
}
```
## 개미군단
```Java
class Solution {
    public int solution(int hp) {
        // 1. hp / 5에서 몫을 구한다
        // 2. hp % 5를 활용해 나머지를 구하고 나머지 값 / 3을 해서 몫을 구한다
        // 3. hp % 5를 활용해 나머지를 구하고 다시 나머지 값 % 3을 해서 나머지 값을 구한다
        // 만약 hp가 27이라면 5 + 0 + 2가 될것이므로 총 7이 나온다
        // hp / 5 : 5의 공격력을 가진 애가 때릴 때 최대한으로 때릴 수를 구함
        // hp % 5 : 5의 공격력을 가진 애가 때리고 남은 hp수
        // 남은 hp 수 / 3 : 3의 공격력을 가진 애가 때릴 때 최대한으로 때릴 수
        // hp % 5 % 3 : 아까와 같이 5와 3의 공격력을 가진 애가 때리고 남은 hp수
        // 마지막 1은 연산을 할 필요가 없기 때문에 남은 hp수를 더해주면 
        int answer = hp / 5 + hp % 5 / 3 + hp % 5 % 3;
        return answer;
    }
}
```
## 모스부호 1
```Java
class Solution {
    public String solution(String letter) {
        String answer = "";
        // 프로그래머스에서 받은 모스부호를 배열에 저장
        String[] morse = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        // 'a'값을 아스키 코드로 받아냄 대문자가 아닌 이유는 문제가 소문자로 반환해야하기 때문
        int ascii = 97;
        // letter는 공백 값을 가지고 있으므로 split을 써서 공백을 기준으로 나눈다
        String[] letterSplit = letter.split(" ");
        // 받아낸 값을 향상된 반복문을 활용함
        for(String ls : letterSplit) {
            // 반복문을 돌리면서 morse의 인덱스와 받아낸 모스부호가 같은지 찾아서
            // ascii 코드에 +i 를 한다
            for(int i = 0; i < morse.length; i++) {
                if(morse[i].equals(ls)) {
                    answer += (char)(ascii + i);
                }
            }
        }
        return answer;
    }
}
```

