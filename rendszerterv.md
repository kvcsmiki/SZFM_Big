## Rendszerterv

## A rendszer célja
A rendszer célja egy felhasználóbarát kérdőív létrehozó webalkalmazás.
    - Emberek regisztálhatnak
    - Bejelentkezhetnek
    - Készíthetnek kérdőíveket
    - Kitölthetnek kérdőíveket
    - Megnézhetik az általuk létrehozott kérdőív kitöltési statisztikáit
A rendszerünknek nem célja a Google Forms leváltása.
## Üzleti folyamatok modellje

## Követelmények
- Felhasználóbarát környezet létrehozása kérdőívek készítéséhez
- Felhasználók kérdőíveinek eltárolása adatbázisban
- A kérdőívek statisztikáinak eltárolása adatbázisban, hozzáférhetővé tétele a készítő számára
- A statisztikák valós időben történő naprakésszé tétele
- Webes környezetben való működés
- GDPR-nak való megfelelés, jelszavak titkosított tárolása
- A kérdőívek kitöltésének biztosítása, regisztráció nélkül
## Funkcionális terv
- Szerepkörök:
    - Admin
    - Felhasználó 
    - Kitöltő
- KITÖLTŐ:
    - Tud kérdőíveket kitölteni, és azokat beküldeni
    - Ezzel a szerepkörrel rendelkezik mindenki, aki nem regisztrál
- FELHASZNÁLÓ:
    - Ezzel a szerepkörrel rendelkezik az, aki regisztrál
    - Tud kérdőíveket létrehozni
    - Tud kérdőíveket kitölteni
    - Hozzáfér az általa létrehozott kérdőív statisztikáihoz
    - Tudja törölni az általa létrehozott kérdőívet
- ADMIN:
    - Rendelkezik minden felhasználói joggal
    - Tud felhasználót törölni
## Fizikai környezet

## Architekturális terv

## Adatbázis terv

## Implementációs terv

## Tesztterv

## Telepítési terv
A szoftver egy webszerveren fog működni, így a webes felületéhez csak egy böngészőre van szükség.
Külön szoftvert nem kell telepíteni.
A webszerverre közvetlenül az internetről kapcsolódnak rá a kliensek.
Mobil és tablet eszközökön is elérhető, kezdetben nem reszponzív formában, de ez a későbbi verziókban változhat.
## Karbantartási terv
Az alkalmazás folyamatos és megfelelő működése érdekében létfontosságúvá válik a megfelelő karbantartás.
Ez magába foglalja a User reportokban dokumentált hibák elhárítását, a felbukkanó és megújuló
felhasználói igények kielégítését és a technológiák fejlődésével felmerülő lehetőségek
beépítése és kiaknázása és minél kreatívabb és felhasználóbarátabb beépítése a programba.
Mivel a program webes felületen fut, így nem szükséges minden kiadott Android és IOS rendszerre
megfigyelnünk a kompatibilitást, de érdemes bizonyos verziónként ellenőriznünk azokat.
Emellett szükséges az alkalmazás mögött futó adatbázis karbantartása, tisztítása és bővítése.
Az adatok megfelelő mentéséről és azok biztonságos tárolásáról is meg kell győződnünk és fenn kell tartanunk.

### Karbantartás
Corrective Maintenance: A felhasználók által felfedezett és "user reportban"
elküldött hibák kijavítása.
Adaptive Maintenance: A program naprakészen tartása és finomhangolása.
Perfective Maintenance: A szoftver hosszútávú használata érdekében végzett
módosítások, új funkciók, a szoftver teljesítményének és működési
megbízhatóságának javítása.
Preventive Maintenance: Olyan problémák elhárítása, amelyek még nem
tűnnek fontosnak, de később komoly problémákat okozhatnak