# Stop the recurring regressions

Claude keeps reintroducing an old customer-code format and removing a cache, even after those changes were corrected. Several tasks appeared fixed, but the next session repeats the mistakes. Find and fix the cause, then demonstrate that a new session completes the next task correctly.

## Task

1. Read the incident and current requirements. Reproduce the reported behavior.
2. Compare the recurring changes with source, design and tests.
3. Find why corrections fail to survive a new session. Use Claude to investigate and make a targeted fix.
4. Write `diagnosis.md` with the cause, contradictory evidence, correction and verification.
5. Start a fresh session and complete the next task without repeating the earlier conversation.

## Working rules

Ordinary source, documentation and student-test edits are allowed. Instructor fixtures, workflows, release metadata and the runtime stay protected. The authoring profile provides scoped patching and fixed tests. Fresh-session checks start new processes; carrying the earlier conversation forward does not count.

## Acceptance targets

- A new session preserves the current customer-code contract and required caching.
- The diagnosis explains the recurring cause and cites repository evidence.
- The correction preserves useful project guidance and avoids a blanket deletion.
- Authorization and the full suite remain correct.

## How to submit

1. Fork this repository to your personal GitHub account. Use fictional information
   only, keep the fork public, and keep `main` as its default branch.
2. Clone your fork and enable GitHub Actions in its **Actions** tab. Use **Connect
   GitHub for scoring** on the lab page to install the read-only grading App on your
   fork. Return to the lab and use **Recheck connection** if needed.
3. Download the TensorLearn client from the lab page and extract it outside your fork.
   Follow the page's connection command from your fork folder. Paste your learner
   token only into the hidden terminal prompt. Run `/load` from your fork folder to
   connect the repository. Run `/load` again after the facilitator launches the round.
4. Create a branch such as `recurring-regressions/first-draft` and complete the task above. Change
   only the files the task allows; any other change makes the submission invalid.
5. Commit and push your branch. Open a PR **inside your own fork**, targeting its
   `main` branch. GitHub may suggest the upstream repository: select your fork instead.
   Opening or updating this PR starts the checks automatically.
6. Keep the PR open. When ready, run **`/submit`** in the connected Claude Code session
   to submit that exact pushed revision for the current round. **No merge is required.**
7. Use `/check` or refresh the lab page to read the saved result. The Actions run and
   `lab-score/score.json` are useful feedback, but an Actions check alone does not
   submit your work or prove that the server saved a score.

A change to your answer requires a new commit, push, and explicit `/submit`. Keep
`main` unchanged: the grader compares your PR with the released starter.

## What is graded

The pinned grader in `.github/workflows/grade.yml` reads your files as data and runs
your code only in an isolated, offline container. Every check is a fixed rule; no AI
model judges your work. Your facilitator separately reviews clarity and reasoning.

- Customer codes: current format accepted, old and malformed codes rejected.
- The 30-second per-customer cache, failure handling and invalid-code handling all behave as designed.
- The full suite passes, and your student tests fail when the old format or the missing cache returns.
- CLAUDE.md drops the false conventions, keeps the useful guidance, and states the current code format, cache and full test command.
- diagnosis.md fills every section and names CLAUDE.md as the cause.
- Leaving a false convention in CLAUDE.md caps the score at 25/100.
