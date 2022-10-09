## Funkcionális specifikáció

## Rendszer céljai és nem céljaisó sorban, mindez ingyenes.

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

## Rendszerre vonatkozó külső megszorítások
A rendszerbe való belépéshez e-mail címre és jelszóra lesz szüksége a felhasználónak,
ezért ezek megfelelő tárolására, kezelésére vonatkozó GDPR szabályozását kell követnünk
emellett a jelszavak tárolására ajánlott az úgynevezett Hash-elt verzió tárolása.
A felhasználó által megadott válaszokat bizalmasan kezeljük, a kérdőívet létrehozó
felhasználó számára sem jeleníthetjük meg, hogy mely felhasználó milyen kérdésekre
milyen választ adott, így a kérdőívek teljesen anonimak maradhatnak.
Emellett gondoskodnunk kell az adatok és az érintett kapcsolatának helyreállíthatatlanságáról.
A rendszerre vonatkozik az adatbázisokra alkalmazott Harmadik Normálforma által meghatározott
tervezési módszer is. Továbbá a felhaszálói felületet köti, a User Interface-k tervezését
megkönnyítő, felhasználó számára olvashatóbbá tevő javaslatok összessége is.

## Jelenlegi üzleti folyamat modellje

## Igényelt üzleti folyamatok modellje

## Követelménylista

## Használati esetek
A szoftvert kiválóan lehet alkalmazni például szakdolgozathoz, felmérésekhez, munkahelyi vagy
iskolai anonim szavazásokhoz.
### Szerepkörök:

- Kérdőív készítő: A kérdőív készítője létrehozhat, módosíthat vagy törölhet kérdőíveket, 
megtekintheti azok eredményeit, statisztikai adatokat, mint például átlagot, móduszt, 
mediánt, vagy diagramokat kérhet le és tekinthet meg. Az így kapott adatokat megoszthatja
más felhasználókkal és nem felhasználókkal link vagy lementett kép formájában, és 
behivatkozhatja azokat. A kérdőív készítő nem szerkesztheti mások kérdőíveit, 
de kitöltői szinten kitöltheti azokat. A kérdőív készítője kitöltheti a saját kérdőívét is.
- Kitöltő: A kérdőív kitöltőnek nem kötelező regisztrálnia az alkalmazásba, enélkül is 
szabadon kitölthet kérdőíveket. A kitöltő a kérdőívekhez valamilyen meghívás útján csatlakozhat,
azokat módosítani, törölni nem tudja és eredményeiket sem láthatja a kérdőív készítő hozzájárulása
nélkül.

## Képernyőtervek

## Funkció - követelmény megfeleltetés