# My talk

A talk made with [Quorum](https://github.com/JBoixCampos/quorum): slides in Markdown, written with your agent, shaped in Studio, given live with the audience on their phones, or exported to PowerPoint.

## Start

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install          # Quorum itself, for this folder
npm run studio       # opens Studio in your browser
```

## How to work on it

1. **Write with your agent.** Open this folder in Claude Code, Codex, Cursor or any coding agent and ask for the talk you want. `AGENTS.md` tells it the format, how to check its work and how to hand you alternatives. An agent in the cloud works on a branch and pushes; pull to see its work.
2. **Shape it in Studio.** `npm run studio`. Click to select, double click to type, drag blocks and polls in from the Insert panel, try other layouts, ask your agent for alternatives. Every change is saved to `talk.md`, so `git diff` shows it.
3. **Give it.** In Studio, **Present** starts the talk: a link and QR code for the audience, the presentation window and your panel. **Export** writes a PowerPoint file or a PDF.

## Commands

| Command | What it does |
| --- | --- |
| `npm run studio` | Studio: edit, rehearse, present and export |
| `npm run check` | Check the talk for mistakes and design problems |
| `npm run present` | Give the talk from the command line |
| `npm run export` | Write a PowerPoint file into `export/` |

Every push runs the checks on GitHub (`.github/workflows/quorum.yml`) and keeps a playable copy, pictures of the slides and a PowerPoint file for each change.

Never commit `.quorum/`: it holds the votes and the presenter key. `.gitignore` already leaves it out.
