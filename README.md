** Веб-сайт студентського гуртожитку «Гуртожиток №1»
Веб-застосунок для перегляду доступних кімнат студентського гуртожитку, ознайомлення з умовами проживання та подачі і редагування заявок на поселення чи обслуговування.

* Основні можливості
Перегляд доступних кімнат та обладнання гуртожитку;

Повноцінна маршрутизація між сторінками за допомогою React Router;

Перегляд детальної інформації про конкретну кімнату за її ідентифікатором;

Синхронізація фільтрів каталогу з параметрами URL;

Створення, перегляд та редагування заявок у вкладеному розділі;

Збереження обраної кімнати при переходах завдяки Context API;

Відображення сторінки 404 у разі переходу за неіснуючим маршрутом.

* Карта маршрутів
/ — Головна сторінка
/rooms — Каталог кімнат з параметрами фільтрації
/rooms/:roomId — Сторінка деталей конкретної кімнати
/requests — Список поданих заявок
/requests/new — Форма створення нової заявки
/requests/:requestId/edit — Форма редагування заявки

— Сторінка 404 для неіснуючих адрес

* Використані технології
ReactJS;

React Router;

Vite;

JavaScript;

HTML;

CSS;

Node.js;

npm;

Docker;

Docker Compose;

Git.

* Структура проєкту
mera-app/
├── docs/
│   └── project-plan.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── RequestsLayout.jsx
│   │   ├── rooms/
│   │   │   ├── RoomCard.jsx
│   │   │   ├── RoomFilters.jsx
│   │   │   └── RoomList.jsx
│   │   └── ui/
│   │       └── PageHeading.jsx
│   ├── data/
│   │   ├── items.js
│   │   └── requests.js
│   ├── hooks/
│   │   ├── useRoomFilters.js
│   │   └── useRoomSelection.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── RequestCreatePage.jsx
│   │   ├── RequestEditPage.jsx
│   │   ├── RequestsPage.jsx
│   │   ├── RoomDetailsPage.jsx
│   │   └── RoomListPage.jsx
│   ├── providers/
│   │   └── RoomSelectionProvider.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .dockerignore
├── Dockerfile
├── compose.yaml
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

* Встановлення та запуск
Для запуску проєкту необхідно мати встановлені Node.js та npm.

* Клонування репозиторію:
git clone https://github.com/Prunko/mera-app

* Перехід до папки проєкту:
cd mera-app

* Встановлення залежностей:
npm install

* Запуск сервера розробки:
npm run dev

* Після запуску застосунок буде доступний у браузері за адресою:
http://localhost:5173/

* Запуск через Docker
Для запуску застосунку в контейнерному середовищі необхідно мати встановлений та запущений Docker Desktop.

* Побудова образу та запуск контейнера:
docker compose up --build

* Після успішного запуску застосунок буде доступний у браузері за адресою:
http://localhost:5173/

* Зупинка контейнера:
docker compose down

* Архітектурний план
Архітектурний план проєкту знаходиться у файлі:
docs/project-plan.md