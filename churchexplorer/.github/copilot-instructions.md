## ChurchExplorer — Copilot instructions

This file gives targeted, actionable context so an AI coding agent (Copilot/agent) can be productive immediately in this repo.
Keep answers short and make edits as small, reversible patches.

---

### Quick project summary (the big picture)
- Single-page React app (Create React App) in `churchexplorer/`.
- Entry: `src/index.js` → `src/App.js`. Main views are:
  - `DenominationVisualizer` (explorer view) — large interactive visualization (`src/DenominationVisualizer.jsx`).
  - `ChurchHistoryGuide` (`src/ChurchHistoryGuide.jsx`) — interactive study guide (8 lessons).
  - `BibleHistoryGuide` (`src/BibleHistoryGuide.jsx`) — interactive study guide (8 lessons).
- Lessons are data-driven: content lives in `src/interactiveLessonData.js` and `src/churchHistoryLessonData.js`.
- Reusable interactive renderer: `src/InteractiveLesson.jsx` — implements card types (content, quiz, matching, fillblank, completion) and handles XP, navigation, and UI.

### Important files to read first
- `src/App.js` — route-like view switching and top-level nav.
- `src/InteractiveLesson.jsx` — the card renderer. If you add a new card type, update this file.
- `src/interactiveLessonData.js` & `src/churchHistoryLessonData.js` — lesson JSON-like objects exported as `lesson1Data`..`lesson8Data`.
- `src/BibleHistoryGuide.jsx` and `src/ChurchHistoryGuide.jsx` — glue code: loads progress/XP from `localStorage`, launches `InteractiveLesson`, and persists results.
- `src/DenominationVisualizer.jsx` — large interactive component; changes here can affect performance.

### Data & structural patterns (explicit examples)
- Lessons export named objects: e.g. `export const lesson1Data = { id:1, title: '...', cards: [ { type: 'content', ... }, { type: 'quiz', ... } ] }`.
- Card `type` values handled in `InteractiveLesson.jsx`: `'content' | 'quiz' | 'matching' | 'fillblank' | 'completion'`.
- Matching card expects `pairs: [{ term, definition }]`. Matching code shuffles definitions using useMemo — match validation is by content not index.
- Quiz cards expect: `question`, `options: []`, `correctAnswer` (index), `explanation`.

### Key runtime / developer workflows
- Install & run locally (project root is `churchexplorer/churchexplorer`):
  - npm install
  - npm start  (dev server, CRA default on :3000)
  - npm run build (produces `build/`)
  - npm run deploy (uses `gh-pages` and `predeploy` script)
- Tailwind is used via `tailwind.config.js` and `index.css` — UI classes are in components directly.
- In GitHub Codespaces or remote containers: forward port 3000 (Ports panel) to open the app in browser.

### Local state & persistence conventions
- Progress & XP are stored in `localStorage` under predictable keys:
  - Bible guide: `bibleHistoryProgress`, `bibleHistoryTotalXP`, `bibleHistoryQuizResults`
  - Church guide: `churchHistoryProgress`, `churchHistoryTotalXP`, `bibleHistoryQuizResults` (some shared keys present — watch naming when editing)
- To reset test data: open the browser console and `localStorage.clear()` (or inspect the keys above).

### Common tasks & how to do them safely
- Add a new lesson or edit content: edit `src/interactiveLessonData.js` (or churchHistory one). Keep the structure (`id`, `title`, `cards`) and card `type` values consistent with `InteractiveLesson.jsx`.
- Add a new card type: update `InteractiveLesson.jsx` to render it and document the expected card fields in the data file.
- Change XP or completion logic: edit `src/InteractiveLesson.jsx` (look for `setXp(... +10)` for per-activity and `+50` completion bonus).
- Fix matching or quiz behavior: check `MatchingCard` and `QuizCard` subcomponents in `InteractiveLesson.jsx` rather than scattered code.

### Debugging tips (where agents often go wrong)
- If behavior differs between dev and build:
  - Check `console` for errors and the network tab for missing assets.
  - Confirm `localStorage` keys aren't carrying stale shapes from previous versions.
- When changing lesson data, the UI may cache shuffled arrays (matching uses useMemo with `card.pairs` as dependency). For deterministic tests, remove/randomize seed.
- For closure/timing bugs (examples seen in this repo): avoid relying on setTimeout when passing state to parent callbacks — use refs or pass values explicitly.

### Testing & validation guidance for PRs
- Run `npm start` and navigate to each guide: Explorer, Church History, Bible History. Manually test at least one interactive lesson per guide.
- Validate localStorage keys after completing a lesson to ensure XP/progress persisted.
- When changing lesson data shape, update both `BibleHistoryGuide.jsx` and `ChurchHistoryGuide.jsx` if they contain handling logic (they have similar code paths).

### Integration & external dependencies
- Visual icons: `lucide-react` (used widely in UI components).
- Email helper: `src/emailService.js` — small wrapper around `@emailjs/browser` used for contact flows.
- Deployment: `gh-pages` script in `package.json` uses CRA build output.

### Style & commit/PR preferences
- Make focused, small patches per change (one lesson or a single UI fix). Keep styling with Tailwind classes used throughout.
- If adding runtime feature flags or new localStorage keys, use unique key names to avoid collisions (`bibleHistory*` vs `churchHistory*`).

---

If any part of this is unclear or you'd like examples (e.g. how to add a quiz card or add a new view), tell me which area and I'll add a short code example or a checklist to the file.
