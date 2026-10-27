# Stop the recurring regressions

Claude keeps reintroducing an old customer-code format and removing a cache, even after those changes were corrected. Several tasks appeared fixed, but the next session repeats the mistakes. Find and fix the cause, then demonstrate that a new session completes the next task correctly.

The repository is a small claims status service: `src/customer-code.mjs` normalizes customer codes, and `src/claims-client.mjs` fetches a customer's claim status from the upstream claims-core service through a short cache. The source as shipped is correct (an engineer restored it after each bad run), so the problem only shows up when Claude works on a new task. `docs/incident.md` lists the two runs that went wrong and the two tasks to use.

**What you'll practise:** debugging Claude Code's working context: reproduce a mistake that keeps coming back, trace why a correction doesn't carry over to a new session, fix that cause in a targeted way, and prove it with regression tests and a fresh session.

**In the course slides:** Chapter 1, Lesson 4: what Claude reads at the start of every session, and why a wrong line there is worse than a missing one.

## Task

1. Read the incident (`docs/incident.md`) and current requirements (`docs/current-schema.md`, `docs/status-design.md`). Reproduce the reported behavior: give Claude the **Reproduction task** quoted in `docs/incident.md` and inspect what it changes.
2. Compare the recurring changes with source, design and tests.
3. Find why corrections fail to survive a new session. Use Claude to investigate and make a targeted fix.
4. Write `diagnosis.md` with the cause, contradictory evidence, correction and verification.
5. Start a fresh session (run `/clear`, or exit and start Claude Code again) and give it the **Next task** quoted in `docs/incident.md`, without repeating the earlier conversation. Record what it did in the *Fresh-session verification* section of `diagnosis.md`.

Tips:

- The reproduction is meant to go wrong, and Claude will probably change `src/`. Read `git diff`, keep notes for `diagnosis.md`, then restore the files it changed (for example `git restore src/`). Don't commit the regressed source.
- `tests/student/verification.test.mjs` fails on purpose (`assert.fail`). Replace it with tests modelled on `tests/contract.test.mjs` that pass on the current source and would fail if the old `CUST-1234` format or the missing cache came back.
- Run the full suite: `node --test tests/*.test.mjs tests/student/*.test.mjs`
- Your personal `~/.claude/CLAUDE.md` and Claude Code's memory also load into every session and can influence these runs. If results look odd, check them.

## Working rules

Ordinary source, documentation and student-test edits are allowed. Workflows (`.github/`), `exercise.json` and Claude Code settings files stay protected. Run the tests with Node 22 (see `docs/testing.md`). A fresh session is a new conversation (`/clear` or a restarted Claude Code); carrying the earlier conversation forward does not count.

## Acceptance targets

- A new session preserves the current customer-code contract and required caching.
- The diagnosis explains the recurring cause and cites repository evidence.
- The correction preserves useful project guidance and avoids a blanket deletion.
- Authorization and the full suite remain correct.

## Done when

- `node --test tests/*.test.mjs tests/student/*.test.mjs` passes on Node 22.
- Your student tests fail if you temporarily put back the `CUST-1234` format or remove the cache from `src/claims-client.mjs` (try it, then `git restore src/`).
- `src/customer-code.mjs` still accepts `CUS-000123` and rejects `CUST-1234`, and `src/claims-client.mjs` still caches each customer for 30 seconds.
- All four sections of `diagnosis.md` are filled, including what the fresh session did with the Next task.

## Graded format

- Keep the four headings of `diagnosis.md` and fill each one. In *Observed cause*, name the file that causes the recurrence.
- Delete wrong guidance outright. A rule that is annotated, quoted or struck through is still read, and still counts as kept.
- Keep the useful general guidance with its wording. Where the corrected guidance covers customer codes, caching and testing, state the current code format, the 30-second cache and the full test command (including `tests/student`).
- Student tests go in `tests/student/` and end in `.test.mjs`. They must pass on your submission; the grader also runs them against the old customer-code format and against a client without the cache, and expects them to fail.
- Commit the correct source, not the version the reproduction produced.

## How to submit

1. Fork this repository to your personal GitHub account. Use fictional information
   only, keep the fork public, and keep `main` as its default branch. In your fork's
   **Actions** tab, click **I understand my workflows, go ahead and enable them** if shown.
2. On the lab page, use **Connect GitHub for scoring** to install the read-only grading
   App on your fork, then **Recheck connection**.
3. Download the TensorLearn connector from the lab page and extract it outside your fork.
   From your fork folder, run the page's `--code` connection command and paste your token
   only into the hidden terminal prompt. This opens a Claude Code session connected to the lab.
4. In that session, run `/load`. Run `/load` again after your instructor launches the round.
5. Create a branch such as `recurring-regressions/first-draft` and complete the task above. Change only the
   files the task allows: any other change, including `.claude/` settings or
   agents, or notes files, makes the submission invalid.
6. Commit and push your branch. Open a PR **inside your own fork**, targeting its `main`
   branch (GitHub may suggest the upstream repository: select your fork instead). Check
   that **Check recurring-regressions submission** starts in the PR's checks. Keep the PR open; no merge
   is required.
7. Run **`/submit`** in the connected Claude Code session, then `/check` (or refresh the
   lab page) to read your saved score. The Actions run is useful feedback, but it does not
   submit your work.

A change to your answer needs a new commit, push and `/submit`. Keep `main` unchanged:
the grader compares your PR with the released starter.

## What is graded

The pinned grader in `.github/workflows/grade.yml` reads your files as data and runs your
code only in an isolated, offline container. Every check is a fixed rule; no AI model
judges your work. Your score is out of 100. Your facilitator separately reviews
clarity and reasoning.

- Customer codes: current format accepted, old and malformed codes rejected.
- The 30-second per-customer cache, failure handling and invalid-code handling all behave as designed.
- The full suite passes, and your student tests fail when the old format or the missing cache returns.
- The project guidance that carried the recurring instructions drops the false conventions, keeps the useful guidance, and states the current code format, cache and full test command.
- diagnosis.md fills every section and names the file that caused the recurrence.
- Leaving a false convention in place caps the score at 25/100.
