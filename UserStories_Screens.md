# ProsteFakty Mobile – User Stories & Screens

## User stories

23 stories in 6 epics; 17 are Must for the course MVP. Priorities: (Must / Should / Could). Screen IDs point to the screen list below.

### E1 – Onboarding

| ID | Story | Acceptance criteria | Priority | Screens |
| --- | --- | --- | --- | --- |
| US-01 | As a user, I want a short intro to what the app does, so that I know why to use it. | 3 slides (News, Sejm, Search + Scan); Skip on every slide; shown only on first launch | Could | S01, S02 |
| US-02 | As a user, I want to use the whole app without signing up, so that I can start right away. | No sign-up or sign-in screens; saved items are kept on the device | Must | S04, S07, S10, S13 |

### E2 – News (Aktualności)

| ID | Story | Acceptance criteria | Priority | Screens |
| --- | --- | --- | --- | --- |
| US-05 | As a user, I want a feed of recent law changes as cards, so that I can see what changed in seconds. | Card shows category, date, print number, status, title, 30-second summary, who it affects; newest first; infinite scroll | Must | S04 |
| US-07 | As a user, I want to open a card and see before vs after, so that I understand the real effect. | Detail shows full summary, before/after comparison, who it affects, arguments for and against, source link | Must | S05 |
| US-08 | As a user, I want to share a news card, so that I can send it to friends. | System share sheet with title + deep link | Could | S05 |
| US-09 | As a user, I want to bookmark a card or article, so that I can come back to it. | Bookmark icon toggles; item appears in Saved | Could | S05, S19 |

### E3 – Sejm sittings (Posiedzenia Sejmu)

| ID | Story | Acceptance criteria | Priority | Screens |
| --- | --- | --- | --- | --- |
| US-10 | As a user, I want a list of Sejm sittings, newest first, so that I can follow the Sejm's work. | Number, dates, status badge (planned / in progress / finished), number of votings, 2-sentence description; loads 10 more on scroll | Must | S07 |
| US-11 | As a user, I want to open a sitting, so that I see which bills it dealt with. | Title, dates, average turnout, description, list of bills with result badge; tapping a bill opens S05 | Must | S08 |
| US-12 | As a user, I want to see how a bill vote went and how each club voted, so that I know who supported it. | Opened from “Zobacz głosowanie” on S05; yes / no / abstain / absent counts, turnout, per-club bars with position (for / against / abstained / split) | Must | S09 |
| US-13 | As a user, I want a link to the official source, so that I can check the data myself. | “Zobacz na sejm.gov.pl” opens the bill page in the in-app browser | Must | S08, S09 |
| US-14 | As a user, I want to refresh a sitting that is in progress, so that I see new votes. | Pull to refresh; “last updated” time shown; depends on how fast Sejm exposes API for the new sitting | Should | S08 |

### E4 – Law search (Wyszukiwarka)

| ID | Story | Acceptance criteria | Priority | Screens |
| --- | --- | --- | --- | --- |
| US-15 | As a user, I want to ask a question in plain Polish, so that I find the right articles without legal terms. | Min. 2 characters; up to 3 results with act title, article number and summary preview; empty state when nothing matches | Must | S10 |
| US-17 | As a user, I want to open an article, so that I read its plain summary and the original text. | Tabs: Summary / Original text; act title and date; bookmark | Must | S05 |
| US-18 | As a user, I want to follow references to other articles, so that I understand the whole rule. | Available references open S05 for that article; unavailable ones shown greyed with “not in database yet” | Must | S05 |

### E5 – Politician scan (Skanuj)

| ID | Story | Acceptance criteria | Priority | Screens |
| --- | --- | --- | --- | --- |
| US-20 | As a user, I want to point my camera at a politician (in person, on TV or a poster), so that I find out who they are. | Live camera with a face frame; result in under 3 s after a face is held steady | Must | S12, S13, S14 |
| US-21 | As a user, I want to see how sure the match is, so that I do not trust a wrong result. | Confidence shown as High / Medium; Medium shows “Is this…?” with top 3 candidates; Low goes to S15 | Must | S14, S15 |
| US-22 | As a user, I want a politician profile, so that I know their party and role. | Photo, name, club, constituency, function, terms in office, number of votes cast this term, attendance %, link to sejm.gov.pl | Must | S16 |
| US-23 | As a user, I want to see how this politician voted on recent bills, so that I can judge their record. | List of final bill votes: bill title, date, their vote (for / against / abstained / absent), club majority shown next to it | Could | S17 |
| US-24 | As a user, I want to scan a photo from my gallery, so that I can identify someone in a screenshot. | Gallery picker; same result flow as the live camera | Could | S13 |
| US-25 | As a user, I want to search politicians by name when the scan fails, so that I still get to the profile. | Search by name with club filter; reachable from S15 and S13 | Should | S18 |
| US-26 | As a user, I want to know what happens to my photo, so that I feel safe using the scan. | First-use notice: only current MPs are matched, the photo is not stored or shared; link to privacy policy | Must | S12 |

### E8 – Trust & reliability

| ID | Story | Acceptance criteria | Priority | Screens |
| --- | --- | --- | --- | --- |
| US-33 | As a user, I want every summary to link to its source and say it is not legal advice, so that I can trust and verify it. | Source link on S05, S09, S16; disclaimer on S05 and in About | Must | S25 |
| US-34 | As a user, I want to see what I loaded before, so that the app still works offline. | Last feed, sittings and opened articles cached; offline banner; Scan and Search disabled with a message | Should | S26 |

## Screen list

19 screens, no registration or sign-in. The bottom tab bar has 4 tabs: **Aktualności**, **Posiedzenia**, **Wyszukiwarka**, **Skanuj**. Every data screen should have 4 states: loading, content, empty, error. Only extra states are listed below.

### Start

| ID | Screen | Purpose | Key elements | Extra states | Data | Stories |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | Splash | Brand while the app loads | Logo, app name | – | Local | US-01 |
| S02 | Onboarding / Guided tour | Explain the app | 3 swipeable slides, page dots, Skip, Next / Start | – | Local | US-01 |

### Tab 1 – Aktualności

| ID | Screen | Purpose | Key elements | Extra states | Data | Stories |
| --- | --- | --- | --- | --- | --- | --- |
| S04 | News feed (home) | Latest law changes at a glance | Header with search shortcut, news cards (category, date, print no., status pill, title, 30-s summary, “Kogo dotyczy”), pull to refresh, infinite scroll | Offline (cached) | GET /api/v1/news | US-05 |
| S05 | Law detail (shared) | One screen for a news item, a bill or an article; opened from S04, S08 and S10 | Title, print no. or act + art. no., streszczenie, key takeaways, before / after, who it affects, arguments for / against, original text and references (articles), result badge + “Zobacz głosowanie” button (only when voted on), source link, disclaimer, bookmark, share | Not voted on: no badge or button; no summary: original text only | GET /api/v1/news/{id}, GET /api/v1/articles/{slug}, or the bill from S08 | US-07, US-08, US-09, US-17, US-18, US-33 |

### Tab 2 – Posiedzenia

| ID | Screen | Purpose | Key elements | Extra states | Data | Stories |
| --- | --- | --- | --- | --- | --- | --- |
| S07 | Sittings list | All sittings of the current term | Cards: big sitting number, dates, status badge, votings count, 2-sentence description; infinite scroll (10 per page) | Description still null → “Opis w przygotowaniu” | GET /api/v1/sittings?page=&page\_size= | US-10 |
| S08 | Sitting detail | What one sitting decided | Number + dates, status, average turnout, description, stats (votings, bills), bill cards with result badge, link to source, “last updated”, pull to refresh | Planned sitting: no bills yet | GET /api/v1/sittings/{number} | US-11, US-13, US-14 |
| S09 | Voting results | Full vote on one bill; opened from “Zobacz głosowanie” on S05 | Print no., title, 2-sentence summary, result badge, donut or bar of yes / no / abstain / absent, turnout, per-club rows (club, position, stacked bar), source link | Result pending: “Głosowanie nie odbyło się na tym posiedzeniu” | From the S08 response (bills\[\]) | US-12, US-13 |

### Tab 3 – Wyszukiwarka

| ID | Screen | Purpose | Key elements | Extra states | Data | Stories |
| --- | --- | --- | --- | --- | --- | --- |
| S10 | Search | Ask a question, get articles | Search field (auto-focus), result cards (act title, art. no., summary preview) | Searching (skeleton cards); nothing found; Qdrant down (503) | POST /api/v1/articles/search | US-15 |

### Tab 4 – Skanuj

| ID | Screen | Purpose | Key elements | Extra states | Data | Stories |
| --- | --- | --- | --- | --- | --- | --- |
| S12 | Camera permission & privacy | Ask for camera and explain privacy once | Illustration, 3 privacy points, “Allow camera”, “Search by name instead” | Permission denied → “Open settings” | OS permission | US-20, US-26 |
| S13 | Scanner | Capture a face | Full-screen camera, face frame overlay, hint text, shutter / auto-capture, gallery button, flash toggle, “Search by name” link | Analysing (spinner over frozen frame); no face found | POST /api/v1/politicians/identify | US-20, US-24 |
| S14 | Scan result | Show who it is | Captured face next to official photo, name, club, confidence label, “Open profile”, “Scan again”; Medium confidence → “Is this…?” with 3 candidate rows | – | identify response | US-20, US-21 |
| S15 | No match | Recover when nobody is found | Message (“To nie jest poseł obecnej kadencji albo zdjęcie jest niewyraźne”), tips (light, distance, one face), “Try again”, “Search by name” | – | – | US-21, US-25 |
| S16 | Politician profile | Who the politician is | Photo, name, club badge, constituency, function, terms, attendance %, votes cast, contact / sejm.gov.pl link, bookmark, “How they voted” entry | – | GET /api/v1/politicians/{id} | US-22, US-33 |
| S17 | Politician votes | Voting record | Filter (all / for / against / absent), rows: bill title, date, their vote icon, club majority; tap → S09 | No votes yet | GET /api/v1/politicians/{id}/votes | US-23 |
| S18 | Politician search | Find a politician by name | Search field, club filter chips, A–Z list with photo, name, club | No results | GET /api/v1/politicians?q=&club= | US-25 |

### Ustawienia (gear icon in the top bar, not a tab)

| ID | Screen | Purpose | Key elements | Extra states | Data | Stories |
| --- | --- | --- | --- | --- | --- | --- |
| S21 | Settings | Hub for saved items and app info | Rows: Saved, About, Clear local data | – | Local | US-09 |
| S19 | Saved | Everything bookmarked | Segments News / Articles / Politicians, swipe to remove | Nothing saved | Local (on the device) | US-09 |
| S25 | About & sources | Trust and legal | What the app is, data sources (Sejm API, ISAP), “not legal advice”, privacy policy, app version | – | Static | US-33 |

### Global

| ID | Screen | Purpose | Key elements | Extra states | Data | Stories |
| --- | --- | --- | --- | --- | --- | --- |
| S26 | Offline / error | Shared full-screen state | Illustration, message, Retry, “Show saved content” | – | – | US-34 |
