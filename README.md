# react-native-practice
리액트 네이티브 연습용으로 만드는 날씨 앱

## 0. 개발 환경 설정

1. expo-cli 설치 or 업데이트

```bash
npm install -g expo-cli
```

2. 프로젝트 생성

```bash
expo init [프로젝트명]
```

3. 프로젝트 실행

```bash
npm start
expo start
```



## 1. 리액트 네이티브 컴포넌트 구조

0. 리액트 네이티브란?

   - 브릿지를 통해 자바스크립트와 ios/android 앱을 연결
   - 인스타그램, 데이팅 앱 등에는 적합 but 3d 비디오 게임 같은 경우는 적합하지 않음

1. `View`: 웹의 `<div>`와 같은 역할

2. `Text`: 웹의 `<span>`과 같은 역할

3. CSS를 자바스크립트 object처럼 사용

   - 웹과 달리 부모 태그의 스타일을 상속받지 않음

   - 특정 태그에 CSS 적용하고 싶으면 해당 태그에 `style={styles.[이름]}` 써두고 CSS 부분에 `[이름]`에 해당하는 스타일 작성

     ```react
     export default function App() {
       return (
         <View style={styles.container}>
         </View>
       );
     }
     
     const styles = StyleSheet.create({
       container: {
         flex: 1,
         backgroundColor: 'red',
         alignItems: 'center',
         justifyContent: 'center',
       },
     });
     ```

   - 아니면 style에 바로 적용하고자 하는 스타일 작성

     ```react
     <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
     ```

4. Flexbox direction

   - 웹: row가 디폴트 (가로로 붙음)
   - 앱: column이 디폴트 (세로로 붙음) - 앱에서는 대부분 위-아래로 위치하기 때문
   - styles에 `flexDirection: 'row'` 라고 쓰면 변경 가능

5. flex

   1. `flex: 1` : 주어진 모든 공간 사용
   2. grid와 비슷한 기능. 부모 컨테이너를 얼마나 차지할 것인지
   3. width, height 보다는 flex를 이용한 레이아웃 코딩 권장 (반응형을 위해)