# 🚨 **Siren**

![](/README.assets/main.png)

```
해당 프로젝트는 'Chrome'에 최적화 되어있습니다.
```

[Siren 바로가기](https://stirring-crepe-b73769.netlify.app)

<br>

## 🙇🏻‍♂️ **Introduction**

카페에서 노트북을 사용하다 잠시 자리를 비울때 불안한적 없으신가요?

Siren은 공공장소에서 소중한 노트북의 도난을 방지해주는 서비스 입니다.

<br>

## 🗓 **Schedule**

[22.06.27 ~ 22.07.15](https://billowy-liver-2a4.notion.site/3f418867739f454badc7d81e2d803a6d?v=a8293e0f8eea4d49ad2be88362f05c03, "notion kanban") - 3weeks

<br>

## 🎬 **Getting Started**

### **Client**

```
git clone https://github.com/yunhak000/siren-frontend.git
```

환경설정 (.env file)을 아래와 같이 입력해야 합니다.
```
REACT_APP_API_KEY=<YOUR_API_KEY>
REACT_APP_AUTH_DOMAIN=<YOUR_AUTH_DOMAIN>
REACT_APP_PROJECT_ID=<YOUR_PROJECT_ID>
REACT_APP_STORAGE_BUCKET=<YOUR_STORAGE_BUCKET>
REACT_APP_MESSAGING_SENDER_ID=<YOUR_MESSAGING_SENDER_ID>
REACT_APP_APP_ID=<YOUR_APP_ID>
REACT_APP_MEASEREMENT_ID=<YOUR_MEASEREMENT_ID>

REACT_APP_SERVER_KEY=<YOUR_SERVER_KEY>
REACT_APP_VAPID_KEY=<YOUR_VAPID_KEY>

REACT_APP_SERVER_URL=<YOUR_SERVER_URL>

REACT_APP_S3_ACCESS_KEY=<YOUR_S3_ACCESS_KEY>
REACT_APP_S3_SECRET_ACCESS_KEY=<YOUR_S3_SECRET_ACCESS_KEY>
REACT_APP_S3_BUCKET=<YOUR_S3_BUCKET>
REACT_APP_S3_REGION=<YOUR_S3_REGION>

REACT_APP_KAKAOMAP_API_KEY=<YOUR_KAKAOMAP_API_KEY>
```

```
npm install
npm start
```

### **Server**

```
git clone https://github.com/yunhak000/siren-backend.git
```

환경설정 (.env file)을 아래와 같이 입력해야 합니다.
```
MONGO_URL=<YOUR_MONGO_URL>
PORT=<YOUR_PORT>

FIREBASE_TYPE=<YOUR_FIREBASE_TYPE>
FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
FIREBASE_PRIVATE_KEY_ID=<YOUR_FIREBASE_PRIVATE_KEY_ID>
FIREBASE_PRIVATE_KEY=<YOUR_FIREBASE_PRIVATE_KEY>
FIREBASE_CLIENT_EMAIL=<YOUR_FIREBASE_CLIENT_EMAIL>
FIREBASE_CLIENT_ID=<YOUR_FIREBASE_CLIENT_ID>
FIREBASE_AUTH_URI=<YOUR_FIREBASE_AUTH_URI>
FIREBASE_TOKEN_URI=<YOUR_FIREBASE_TOKEN_URI>
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=<YOUR_FIREBASE_AUTH_PROVIDER_X509_CERT_URL>
FIREBASE_CLIENT_X509_CERT_URL=<YOUR_FIREBASE_CLIENT_X509_CERT_URL>
```

```
npm install
npm start
```

<br/>

## 🖥 **Feature**

1. Firebase authentication를 활용한 구글 로그인  
   ![](/README.assets/login.gif)

  <br>

2. 감시시작 버튼 클릭 socket.io-clien를 활용한 모바일 연동  
   ![](/README.assets/mobile_monitoring.gif)

  <br>

3. 웹캠에 **사람감지시** 2초에 한번 사진 촬영 및 모바일 실시간 업데이트  
   ![](/README.assets/photo.gif)

  <br>

4. 노트북 덮개를 덮을시 경보가 울리고, 모바일에 경보울림 표시  
   ![](/README.assets/alert.gif)

  <br>

5. 기기가 도난당했을 때를 대비해 마지막 위치 표시  
   ![](/README.assets/map.png)

<br>

## 📚 **Stack**

### **Frontend**

- ES6+
- React
- Zustand (Client state)
- Styled Compontents
- Socket.io-client
- Firebase authentication
- AWS S3 bucket

### **Backend**

- Node.js
- Express
- MongoDB - Atlas
- Mongoose
- Socket.io

<br>

## 📉 **Difficulties**

모바일과 데스크탑을 구분하여 socket 통신과 상태관리를 다르게 해야 한다는 점, 한 계정에 대한 데스크탑과 모바일만 컨트롤이 되어야 하니 socket room을 이용하여 구현하였습니다. 그 과정이 매우 헷갈리고 에러가 잦았고 그때마다 저는 해당 기능에 대한 소스를 처음부터 분석하며 여러 가지 엣지 케이스들을 하나하나 생각해나가며 문제를 해결하였습니다.

<br>

## 🛠 **Depoloy**

### **Frontend**

```
Netlify
```

### **Backend**

```
AWS
```
