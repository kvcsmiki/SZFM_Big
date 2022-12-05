# Tesztelési jegyzőkönyv

## Manuális tesztek

### Bejelentkező felület
| ID | Név | Leírás | Megfelelés
| ----------- | ----------- | ----------- | ----------- |
| B1 | Eltolódás | A bejelentkezési oldalon a kék terület elmozgatható, ezt a Sign up/in gomb nyomásával érjük el | OK |
| B2 | E-mail formátumú e-maillel regisztrálás | Az e-mail el lesz fogadva | OK |
| B3 | Nem e-mail formátumú e-maillel regisztrálás | Feljön egy üzenet a textbox-ban ami megkér hogy javítsuk ki | OK |
| B4 | E-mail kihagyása regisztrációkor | Nem történik regisztráció, konzolban hiba jelenik meg | OK |
| B5 | Felhasználónév kihagyása regisztrációkor | Nem történik regisztráció, konzolban hiba jelenik meg | OK |
| B6 | Jelszó kihagyása regisztrációkor | Nem történik regisztráció, konzolban hiba jelenik meg | OK |
| B7 | Helyes adatokkal való regisztrálás | Megtörténik a regisztráció, a jelszó titkosítva van az adatbázisban | OK |
| B8 | Belépés regisztrált felhasználóval | Megtörténik a bejelentkezés, megjelenik a főképernyő | OK |
| B9 | Belépés nem regisztrált felhasználóval | Nem történik meg a bejelentkezés | OK |

### Főképernyő
| ID | Név | Leírás | Megfelelés
| ----------- | ----------- | ----------- | ----------- |
| F1 | Kijelentkezés | A kijelentkezés gombra kattintva kijelentkezünk | OK |
| F2 | Create | A create gombra kattintva feljön a létrehozó felület | OK |
| F3 | All | Az All Questionnaires gombra kattintva feljön a kérdőív választó felület | OK |

### Kérdőív létrehozás
| ID | Név | Leírás | Megfelelés
| ----------- | ----------- | ----------- | ----------- |
| K1 | Szöveges | Az új szöveges kérdés gombra kattintva megjelenik egy új doboz középen melybe a kérdésünket tudjuk beírni | OK |
| K2 | Kérdés törlése | A már meglévő kérdés melletti törlés gombra kattintva töröljük a kérdést | OK |
| K3 | Mentés | A kérdőív mentésre kerül a mentés gombra kattintás után | OK |
