<p align="center"> 
  <img src="frontend/src/assets/img/logo.png" alt="M贸j Profesor logo" height="100px">
</p>
<div align="center">
    <!-- Contributors number -->
    <a><img src='https://img.shields.io/badge/all_contributors-11-blue.svg?style=flat-square' /></a>
    <!-- Stability -->
    <a><img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square" alt="API stability" />
    </a>
    <!-- NPM version -->
    <a><img src="https://img.shields.io/npm/v/choo.svg?style=flat-square"
        alt="NPM version" />
    </a>
    <!-- Build Status -->
    <a><img src="https://img.shields.io/travis/choojs/choo/master.svg?style=flat-square"
        alt="Build Status" />
    </a>
    <!-- Standard -->
    <a><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
        alt="Standard" />
    </a>
</div>
<br>
<h2 align="center"> M贸jProfesor - wszystkie opinie na temat Twoich Prowadz膮cych! </h2>
<br>
<div align="center">
  <h3>
    <a href="#description">
      Opis projektu
    </a>
    <span> | </span>
    <a href="#functions">
      Funkcjonalno艣ci
    </a>
    <span> | </span>
    <a href="#live-demo">
      Demo
    </a>
    <span> | </span>
    <a href="#configuration">
      Konfiguracja
    </a>
    <span> | </span>
    <a href="#folder-structure">
      Struktura projektu
    </a>
    <span> | </span>
    <a href="contributors">
      Kontrybutorzy
    </a>
  </h3>
</div>

<br>

<h2 id="description" style="color: rgb(55,148,255);"> 馃摑 Opis projektu </h2>

M贸jProfesor to odnowiona wersja doskonale znanego wszystkim Studentom portalu z opiniami o Prowadz膮cych. Tylko tutaj dowiesz si臋, z kim b臋dziesz mia艂 zaj臋cia w nast臋pnym semestrze, co na temat Twoich Prowadz膮cych s膮dz膮 inni studenci, a tak偶e na co zwr贸ci膰 uwag臋 podczas nauki i na jakie zaj臋cia warto si臋 zapisa膰. 

Masz w艂asne przemy艣lenia na temat zaj臋膰 prowadzonych na Twojej uczelni? Nie zgadzasz si臋 z opiniami dodanymi przez innych U偶ytkownik贸w? A mo偶e chcesz osobi艣cie doceni膰 prac臋 swojego ulubionego Prowadz膮cego? Dodaj swoj膮 opini臋 i pom贸偶 innym Studentom rozwia膰 swoje w膮tpliwo艣ci!

A kiedy dowiesz si臋 wszystkiego na temat swoich Prowadz膮cych, daj nam zna膰, czy nasz projekt Ci si臋 spodoba艂 i zostaw gwiazdk臋, aby zmotywowa膰 nas do dalszej pracy :relaxed:! 

<br>
<h2 id="functions" style="color: rgb(55,148,255);"> 馃幆 Fukcjonalno艣ci </h2>

<h3> 鈥? Wyszukiwanie Profesora </h3>
Aplikacji M贸jProfesor pozwoli Ci znale藕膰 Twojego Profesora, bez konieczno艣ci rejestracji! Wystarczy, 偶e podasz imi臋 i nazwisko Prowadz膮cego i ju偶 po chwili dowiesz si臋, jak oceniaj膮 go inni Studenci.
<br><span style="color:rgba(0,0,0,0);">.</span>
<img src="./readme_assets/search.gif" alt=""/>

<h3> 鈥? Rejestracja </h3>
Mo偶esz r贸wnie偶 do艂膮czy膰 do naszej spo艂eczno艣ci i zarejestrowa膰 si臋. Zapewniamy pe艂n膮 <span style="color: gray">anonimowo艣膰</span> 馃か - przy rejestracji poprosimy Ci臋 jedynie o adres e-mail.
<br><span style="color:rgba(0,0,0,0);">.</span>
<img src="./readme_assets/register.gif" alt=""/>

<h3> 鈥? Logowanie </h3>
Zaloguj si臋, aby m贸c korzysta膰 ze wszystkich funkcjonalno艣ci naszej aplikacji. E-mail, has艂o i... nasza aplikacja jest w pe艂ni do Twojej dyspozycji!
<br><span style="color:rgba(0,0,0,0);">.</span>
<img src="./readme_assets/login.gif" alt=""/>

<h3> 鈥? Dodawanie opinii </h3>
Jako zalogowany U偶ytkownik mo偶esz podzieli膰 si臋 ze wszystkimi swoj膮 ocen膮 na temat Prowadz膮cych. Tutaj te偶 przypominamy o pe艂nej <span style="color: gray">anonimowo艣ci</span> 馃か!
<br><span style="color:rgba(0,0,0,0);">.</span>
<img src="./readme_assets/rate.gif" alt=""/>

<h3> 鈥? Dodawanie Profesora </h3>
Nie znalaz艂e艣 swojego Profesora? Nic straconego! Dodaj go do naszej bazy i jako pierwszy dodaj ocen臋. Inni Studenci b臋d膮 ci wdzi臋czni :wink:!
<br><span style="color:rgba(0,0,0,0);">.</span>
<img src="./readme_assets/add.gif" alt=""/>

<br>
<h2 id="live-demo" style="color: rgb(55,148,255);"> 馃殌 Live demo </h2>

Chcesz ju偶 teraz przetestowa膰 nasz膮 aplikacj臋? Kliknij <a href="https://moj-profesor.herokuapp.com/">tutaj!</a>

<br>
<h2 id="configuration" style="color: rgb(55,148,255);"> 馃捇 Uruchomienie projektu </h2>

Aby uruchomi膰 ten projekt musisz wcze艣niej zainstalowa膰 Node.js oraz Docker na swoim komputerze. Nast臋pnie wykonaj poni偶sze kroki:

1. Pobierz repozytorium:

```
git clone https://github.com/bartq98/mojProfesor.git
```

2. Przejd藕 do folderu z projektem:

```
cd mojProfesor
```

3. Uruchom Dockera:

```
docker-compose up --build --force-recreate -d
```

4. Przejd藕 do podfolderu `frontend`:

```
cd frontend
```

5. Zainstaluj zale偶no艣ci:

```
npm install
```

6. Uruchom aplikacj臋:

```
npm start
```

7. Uruchom przegl膮dark臋, wejd藕 na `localhost:3000` i ciesz si臋 dzia艂aj膮c膮 apikacj膮!

<br>
<h3>Wykorzystywane porty: <h3>

| Service       | Hostname                    | IP         | Ports exposed | Purpose               |
|---------------|-----------------------------|------------|---------------|-----------------------|
| api           | mojprofesor_api_1           | 172.18.0.3 | 7000->80      | Spring-boot API       |
| postgres_db   | mojprofesor_postgres_db_1   | 172.18.0.2 | 6432->5432    | Database              |

<br>
<h3>Dokumentacja backend'u:</h3>

```
http://localhost:7000/swagger-ui/index.html
```
<br>
<h2 id="folder-structure" style="color: rgb(55,148,255)"> 馃尩 Struktura projektu </h2>

```
mojProfesor
鈹溾攢鈹?鈹?backend
鈹?   鈹溾攢鈹?鈹?.mvn
鈹?   鈹?   鈹斺攢鈹?鈹?wrapper
鈹?   鈹溾攢鈹?鈹?src
鈹?   鈹?   鈹溾攢鈹?鈹?main
鈹?   鈹?   鈹?   鈹溾攢鈹?鈹?java
鈹?   鈹?   鈹?   鈹?   鈹斺攢鈹?鈹?com
鈹?   鈹?   鈹?   鈹?       鈹斺攢鈹?鈹?mojprofesor
鈹?   鈹?   鈹?   鈹?           鈹斺攢鈹?鈹?backend
鈹?   鈹?   鈹?   鈹?               鈹溾攢鈹?鈹?configuration
鈹?   鈹?   鈹?   鈹?               鈹?   鈹斺攢鈹?鈹?jwt
鈹?   鈹?   鈹?   鈹?               鈹溾攢鈹?鈹?controller
鈹?   鈹?   鈹?   鈹?               鈹溾攢鈹?鈹?entity
鈹?   鈹?   鈹?   鈹?               鈹溾攢鈹?鈹?exception
鈹?   鈹?   鈹?   鈹?               鈹溾攢鈹?鈹?payload
鈹?   鈹?   鈹?   鈹?               鈹溾攢鈹?鈹?repository
鈹?   鈹?   鈹?   鈹?               鈹斺攢鈹?鈹?service
鈹?   鈹?   鈹?   鈹斺攢鈹?鈹?resources
鈹?   鈹?   鈹斺攢鈹?鈹?test
鈹?   鈹?       鈹斺攢鈹?鈹?java
鈹?   鈹?           鈹斺攢鈹?鈹?com
鈹?   鈹?               鈹斺攢鈹?鈹?mojprofesor
鈹?   鈹?                   鈹斺攢鈹?鈹?backend
鈹?   鈹斺攢鈹?鈹?target
鈹?       鈹溾攢鈹?鈹?classes
鈹?       鈹?   鈹斺攢鈹?鈹?com
鈹?       鈹?       鈹斺攢鈹?鈹?mojprofesor
鈹?       鈹?           鈹斺攢鈹?鈹?backend
鈹?       鈹?               鈹溾攢鈹?鈹?configuration
鈹?       鈹?               鈹?   鈹斺攢鈹?鈹?jwt
鈹?       鈹?               鈹溾攢鈹?鈹?controller
鈹?       鈹?               鈹溾攢鈹?鈹?entity
鈹?       鈹?               鈹溾攢鈹?鈹?exception
鈹?       鈹?               鈹溾攢鈹?鈹?payload
鈹?       鈹?               鈹溾攢鈹?鈹?repository
鈹?       鈹?               鈹斺攢鈹?鈹?service
鈹?       鈹溾攢鈹?鈹?generated-sources
鈹?       鈹?   鈹斺攢鈹?鈹?annotations
鈹?       鈹溾攢鈹?鈹?generated-test-sources
鈹?       鈹?   鈹斺攢鈹?鈹?test-annotations
鈹?       鈹溾攢鈹?鈹?maven-status
鈹?       鈹?   鈹斺攢鈹?鈹?maven-compiler-plugin
鈹?       鈹?       鈹溾攢鈹?鈹?compile
鈹?       鈹?       鈹?   鈹斺攢鈹?鈹?default-compile
鈹?       鈹?       鈹斺攢鈹?鈹?testCompile
鈹?       鈹?           鈹斺攢鈹?鈹?default-testCompile
鈹?       鈹斺攢鈹?鈹?test-classes
鈹?           鈹斺攢鈹?鈹?com
鈹?               鈹斺攢鈹?鈹?mojprofesor
鈹?                   鈹斺攢鈹?鈹?backend
鈹斺攢鈹?鈹?frontend
    鈹溾攢鈹?鈹?public
    鈹斺攢鈹?鈹?src
        鈹溾攢鈹?鈹?assets
        鈹?   鈹溾攢鈹?鈹?css
        鈹?   鈹斺攢鈹?鈹?img
        鈹溾攢鈹?鈹?components
        鈹?   鈹溾攢鈹?鈹?common
        鈹?   鈹?   鈹溾攢鈹?鈹?Input
        鈹?   鈹?   鈹溾攢鈹?鈹?Layout
        鈹?   鈹?   鈹溾攢鈹?鈹?Mark
        鈹?   鈹?   鈹溾攢鈹?鈹?SignedIcon
        鈹?   鈹?   鈹溾攢鈹?鈹?Star
        鈹?   鈹?   鈹溾攢鈹?鈹?StarRating
        鈹?   鈹?   鈹斺攢鈹?鈹?Text
        鈹?   鈹溾攢鈹?鈹?login
        鈹?   鈹溾攢鈹?鈹?ProfesorDetails
        鈹?   鈹斺攢鈹?鈹?ProfessorsView
        鈹溾攢鈹?鈹?dal
        鈹溾攢鈹?鈹?hooks
        鈹溾攢鈹?鈹?store
        鈹?   鈹斺攢鈹?鈹?slices
        鈹溾攢鈹?鈹?typing
        鈹?   鈹斺攢鈹?鈹?interfaces
        鈹溾攢鈹?鈹?utils
        鈹?   鈹斺攢鈹?鈹?constants
        鈹斺攢鈹?鈹?views
```

<br>
<h2 id="contributors" style="color: rgb(55,148,255);"> 馃懛 Kontrybutorzy </h2>

Projekt wsp贸艂tworzyli studenci trzeciego roku Informatyki na Wydziale Informatyki i Telekomunikacji Politechniki Krakowskiej (<a href="#emoji_key">[oznaczenia]</a>):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/JacobChwastek"><img src="https://avatars.githubusercontent.com/u/42520499?v=4" width="100px;" alt=""/><br /><sub><b>Jakub Chwastek</b></sub></a><br /><a  title="Leader" href="#leader">:rocket:</a> <a title="Tools" href="#frontend">:pencil2:</a></td>
    <td align="center"><a href="https://github.com/borchowiec"><img src="https://avatars.githubusercontent.com/u/28399455?v=4" width="100px;" alt=""/><br /><sub><b>Patryk Borchowiec</b></sub></a><br /><a href="https://avatars.githubusercontent.com/u/28399455?v=4" title="Leader" href="#leader">:rocket:</a> <a title="Tools" href="#backend">:hammer:</a></td>
    <td align="center"><a href="https://github.com/bartq98"><img src="https://avatars.githubusercontent.com/u/26898625?v=4" width="100px;" alt=""/><br /><sub><b>Bartek Bie艅ko</b></sub></a><br /><a title="Leader" href="#leader">:rocket:</a> <a title="Tools" href="#frontend">:pencil2:</a></td>
    <td align="center"><a href="https://github.com/nataliab9910"><img src="https://avatars.githubusercontent.com/u/44544591?v=4&fbclid=IwAR2rMlVmFmAZ6smtf1FufUEmOMkL3oSLOxI4GHWQBi_2YePkDNVGk32_1DU" width="100px;" alt=""/><br /><sub><b>Natalia Bidzi艅ska</b></sub></a><br /><a title="Tools" href="#frontend">:pencil2:</a> 
    <!-- <a title="Tools">:pencil:</a> -->
    </td>
    <td align="center"><a href="https://github.com/dannn98"><img src="https://avatars.githubusercontent.com/u/64230522?v=4" width="100px;" alt=""/><br /><sub><b>Dawid D膮bek</b></sub></a><br /><a title="Tools" href="#backend">:hammer:</a></td>
    <td align="center"><a href="https://github.com/dd0h"><img src="https://avatars.githubusercontent.com/u/52318557?v=4" width="100px;" alt=""/><br /><sub><b>Marek Buczek</b></sub></a><br /><a title="Tools" href="#frontend">:pencil2:</a></td>
  </tr>
</table>
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/VoodooPrograms"><img src="https://avatars.githubusercontent.com/u/23705516?v=4" width="100px;" alt=""/><br /><sub><b>Bartosz Belski</b></sub></a><br /><a title="Leader" href="#leader">:rocket:</a> <a title="Tools" href="#devops">:wrench:</a></td>
    <td align="center"><a href="https://github.com/Gladias"><img src="https://avatars.githubusercontent.com/u/15852857?v=4" width="100px;" alt=""/><br /><sub><b>Aleksander Dr贸偶d偶</b></sub></a><br /><a title="Tools" href="#backend">:hammer:</a></td>
    <td align="center"><a href="https://github.com/dziewonskajolanta"><img src="https://avatars.githubusercontent.com/u/31817841?v=4" width="100px;" alt=""/><br /><sub><b>Jolanta Dziewo艅ska</b></sub></a><br /><a title="Tools" href="#backend">:hammer:</a></td>
    <td align="center"><a href="https://github.com/oneirros"><img src="https://avatars.githubusercontent.com/u/62250112?v=4" width="100px;" alt=""/><br /><sub><b>Jakub Bia艂o艅</b></sub></a><br /><a title="Tools" href="#backend">:hammer:</a></td>
    <td align="center"><a href="https://github.com/festinalentee"><img src="https://avatars.githubusercontent.com/u/62673333?v=4" width="100px;" alt=""/><br /><sub><b>Karolina Bie艅kowska</b></sub></a><br /><a title="Tools" href="#frontend">:pencil2:</a></td>
  </tr>
</table>

<br>
<div id="emoji_key">
  <h2> 馃攽 Oznaczenia:</h2>
  <h3>
    <a id="leader">
      :rocket: - Leader
    </a>
  </h3>
  <h3>
    <a id="backend">
      :hammer: - Backend
    </a>
  </h3>
  <h3>
    <a id="frontend">
      :pencil2: - Frontend
    </a>
  </h3>
  <h3>
    <a id="devops">
      :wrench: - DevOps
    </a>
  </h3>
</div>

<br>
<h1 style="color: rgb(55,148,255);">Koniec! :blue_heart:</h1>
