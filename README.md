# FamilyFriends 2.0

Komplet selvstændig Next.js-version med Dog CEO API, søgning, favorithjerter (kun i lokal React-state), dynamiske hundesider, loading-skeletons og fejlhåndtering.

## Start på Mac i VS Code
1. Pak ZIP-filen ud.
2. Åbn mappen `FamilyFriends-2.0` i VS Code (File → Open Folder).
3. Åbn Terminal → New Terminal.
4. Kør `npm install` (første gang).
5. Kør `npm run dev`.
6. Åbn den `Local`-adresse, terminalen viser, typisk http://localhost:3000.

## Sider
- `/` – hundeliste fra API, søgning, favorithjerter.
- `/dogs/labrador` – dynamisk detaljeside (prøv også beagle, husky osv.).
- `/detailview` – selvstændig statisk eksempel-side med Scrappy Doo-design.

## Vigtigt
- Dette er en **ny, separat 2.0-mappe**. Den ændrer ikke din gamle FamilyFriends-mappe.
- Dine oprindelige billeder og præcise gamle komponentkoder var ikke vedlagt. Derfor er den statiske Scrappy Doo-side en rekonstruktion med emoji-pladsholder, ikke en nøjagtig kopi.
- Billeder til API-hundene kræver internetadgang. Billederne skifter, fordi API'et leverer tilfældige billeder.
- `country` er `Unknown`, fordi Dog CEO-billed-API'et ikke giver landeoplysninger.
- En aktiv anden Next.js-server kan optage port 3000. Brug den port, terminalen viser, og stop gamle servere med Ctrl+C.
- `npm install` opretter `node_modules` og en lockfil. Disse er ikke med i ZIP-filen.
