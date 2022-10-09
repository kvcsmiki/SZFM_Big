# Követelményspecifikáció

## Jelenlegi helyzet leírása
Jelenleg több rendszer is létezik kérdőívek generálására, ezek közül a legismertebb
A Google Form, ahol saját magunknak készíthetünk kérdőíveket, majd ezeket
megoszthatjuk más felhasználókkal. A Google Form nem támogatja megfelelően a statisztikák
megjelenítését. Emellett az itt elkészült statisztikákat nem tudjuk megosztani, esetleg
behivatkozni, ha valaki például szakdolgozathoz szeretné felhasználni az adatokat.
Emellett nincs lehetőség interaktív, akár százalékos válaszok megadására, a kérdőívet
tervező felhasználó lehetőségei korlátozottak. 
Idősebb felhasználók számára bonyolult a mostani rendszer, többen preferálják a 
drag'n'drop módszert.
Emellett a jelenlegi módszer a Google tulajdona, kitöltéséhez Google által üzemltetett
Gmail fiók szükséges, amelyet nem minden felhasználó preferál.

## Vágyálom rendszer leírása
A megrendelő szeretne egy olyan kérdőív létrehozó oldalt, mely egyszerűen kezelhető.
Elképzelései a következők:
    - Felhasználók tudnak regisztrálni az oldalra, létrehozhatnak kérdőíveket, melyeket másokkal megoszthatnak,
és mások akár regisztráció nélkül is kitölthetik.
    - Az adott kérdőívet létrehozó felhasználó valós időben nyomon követheti a kitöltési statisztikákat.
    - Az oldal kezelése felhasználóbarát.
    - A kérdőíveket könnyű létrehozni, és kitölteni is.
    - Több válaszadási lehetőség (igen - nem, 1-10, saját szöveg stb.)

## Rendszerre vonatkozó törvények, rendeletek, szabványok, ajánlások
A rendszerbe való belépéshez e-mail címre és jelszóra lesz szüksége a felhasználónak,
ezért ezek megfelelő tárolására, kezelésére vonatkozó GDPR szabályozását kell követnünk
emellett a jelszavak tárolására ajánlott az úgynevezett Hash-elt verzió tárolása.
A felhasználó által megadott válaszokat bizalmasan kezeljük, a kérdőívet létrehozó
felhasználó számára sem jeleníthetjük meg, hogy mely felhasználó milyen kérdésekre
milyen választ adott, így a kérdőívek teljesen anonimak maradhatnak.
Emellett gondoskodnunk kell az adatok és az érintett kapcsolatának helyreállíthatatlanságáról.

## Jelenlegi üzleti folyamat modellje

## Igényelt üzleti folyamatok modellje
A megrendelő szeretne egy regisztrációs felületet, ahol e-mail, felhasználónév és jelszó megadásával egy új felhasználót hozhat létre.
A regisztrációs felülettel egybekötött a bejelentkezési felület.
Itt egy már regisztrált felhasználó e-mail, és jelszó megadásával tud bejelentkezni.
Szükség van egy kérdőív létrehozó felületre, ahol az adott felhasználó saját kérdőíveket csinálhat.
A kérdőív mentése után egy URL generálódik, amivel a kitöltők elérhetik és kitölthetik a kérdőívet.
Kitöltés után az adatok megjelennek a kérdőívet létrehozó felhasználó profilján,
a statisztikákkal együtt.
## Követelménylista
