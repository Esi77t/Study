Day03
-----------------
```Java
// 11) str1[] == str2[]이므로 굳이 str2.length()를 더 쓸 필요 없음
// 반복문으로 i가 전부 실행될 때까지 실행문을 실행
// answer에 한번씩 담겨서 출력

class Solution {
    public String solution(String str1, String str2) {
        String answer = "";
        for(int i = 0; i < str1.length(); i++) {
            answer += str1.charAt(i);
            answer += str2.charAt(i);
        }
        return answer;
    }
}
```
---
```Java
// 12) 반복문을 활용
// arr에 담아둔 문자를 문자열로 출력하기 위해 arr[i]를 answer에 담아둠

class Solution {
    public String solution(String[] arr) {
        String answer = "";
        for(int i = 0; i < arr.length; i++) {
            answer += arr[i];
        }
        
        return answer;
    }
}
```
---
```Java
// 13) 반복문을 활용
// k만큼 출력해야 하니 i가 k만큼 반복을 해야하므로 k보다 작은 수로 맞춤

class Solution {
    public String solution(String my_string, int k) {
        String answer = "";
        for(int i = 0; i < k; i++) {
            answer += my_string;
        }
        
        return answer;
    }
}

// 다른 방식
// repeat 메서드를 활용함

class Solution {
    public String solution(String my_string, int k) {
        return my_string.repeat(k);
    }
}
```
---
