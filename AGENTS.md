# AGENTS.md

This folder is a Quorum talk: a presentation where the audience answers from their phones. If you are an AI agent asked to write or change this talk, read this first.

## Files

- `talk.md`: the whole talk, in Markdown. This is the file you edit.
- `components/`: custom slide pieces, one JavaScript file each (`components/counter.js` is an example).
- `.quorum/`: votes, questions and the presenter key of live sessions. **Never read, edit or delete it.**

## Check your work

After every change, run:

```bash
quorum check --json
```

It prints `{ ok, title, slides, theme, interactions, warnings, issues, suggestions }` and exits with a non-zero code while there are warnings. Fix every warning before you say the talk is done, then work through the suggestions. With Playwright installed, `quorum check --visual --json` also measures each slide in a browser, and `quorum snapshot` saves a picture of every slide (and `contact.png` with all of them) in `.quorum-snapshots/` for you to look at. For a PowerPoint file, run `quorum export --pptx` (needs Playwright; `--safe-fonts` for unknown computers, `--no-audience` to leave out the slides where the audience answers). The slides with a poll become a panel that points to Quorum. The speaker sees it with `quorum preview` (a simulated audience votes, and the slides update as you edit) and gives it with `quorum live`: those are theirs to run.

## Working with the person

The person shapes the talk in Quorum Studio (`npm run studio`) while you work: it edits the same files and shows your changes as soon as they are saved, so keep the talk valid at every save. Presenting and exporting are theirs to do from Studio.

## Requests

When the person wants something from you, Studio saves a request in `requests/` and they tell you to work through them. Do this:

```bash
quorum requests                              # the open requests
quorum requests show <id>                    # where the slide is, what they want, how to check
quorum requests claim <id> --by <your name>  # before you start: only one agent can hold a request
quorum requests done <id> --note "what you did"   # when the work is saved
```

Do exactly what the request says, run `quorum check`, then close it with a note the person can read in Studio. If you cannot do it, `quorum requests release <id>` and say why. An agent that can run a background command can start `quorum requests --watch` to hear about new requests as they arrive.

When several agents work at once: `quorum context <slide>` prints what you need to start (the slide with its hash, its neighbours, the decisions so far). Write a slide with `quorum slide set <slide> --base <hash> < slide.md`: it refuses if someone changed the slide after you read it, and then you read it again and redo your change. Record choices a later agent should know with `quorum decide "what and why" --slide <id> --by <your name>`.

## Alternatives for a slide

`quorum remix <slide>` draws a slide in other layouts on one picture for the person to choose from (`--pick <n>` applies one). To offer your own, save each as a variant: `quorum variant add <slide> --by you --direction "data first" < variant.md` (one slide, no `---` line); they appear in the same picture. Do not pick for the person unless they ask.

## In a repository

If other people or agents work on this talk through git: use one branch per task (`agent/short-name`), pull before you start, commit small, run `quorum check` before pushing, and do not push to `main` unless told to. A talk can be split into one file per slide (`slides: slides/` in the front matter): then touch only the slide files your task is about, and add a slide as a new file with a gap in the numbering (`025-new-idea.md`). `quorum diff main --pictures` shows what you changed, before and after. Never commit `.quorum/`.

## The format in short

```markdown
---
title: The talk title
duration: 20          # minutes
---

<!-- layout: center -->
# A title slide

::: join Scan to join
:::

---

## A normal slide

Markdown as usual.

--

Two dashes: this part appears on the next click.

::: notes
Speaker notes, only for the speaker.
:::
```

- `---` on its own line starts a new slide. `--` starts the next step of the same slide (`-- fly`, `-- zoom`, `-- blur`, `-- drop`, `-- highlight` choose how it appears).
- `theme:` sets the whole look: `clean`, `editorial`, `bold`, `midnight`, `paper`, `studio`, `signal` or `terminal` (or `light`, `dark`, or a theme file `themes/acme.yaml`). Fine tuning in the front matter: `scale`, `weight`, `case`, `radius`, `density`, `surface`, `texture`, `gradient`, `transition`, `charts`, `reveal`, `palette`. `quorum schema` lists every value.
- Branding goes in the front matter: `accent:`, `primary:` (titles), `secondary:` (details), `background:`, `text:`, `logo: images/logo.svg`, `font:` and `text-font:` (a CSS font-family or a font file), `footer: {title} | {n} / {total}` (or `off`), `style: brand.css`. Use the speaker's brand when they give one.
- `<!-- background: images/photo.jpg, dim -->` puts an image (or a `#colour`) behind one slide. `<!-- logo: off -->` and `<!-- footer: off -->` hide the logo and the footer there.
- `<!-- layout: name -->` composes a slide: `center`, `title`, `section`, `agenda`, `split` (first image on one half; `split, right`), `full` (image fills the slide), `statement`, `quote`, `big-number`, `grid`, `compare`, `closing`. `<!-- section: Warm-up, 5 -->` starts a section planned for 5 minutes. `<!-- transition: zoom -->` changes how one slide comes in.
- Blocks: `::: columns` (split by `+++`), `::: stat 88`, `::: callout Title`, `::: center`, `::: cards` (split by `+++`), `::: timeline` (`- 1857: text`), `::: steps`, `::: kpis` (`- 42%: label`), `::: compare`, `::: chart bar|column|line|donut|pictogram` (`Label: 12` lines), `::: style` (CSS for this slide).
- `{.class key=value}` after a heading, paragraph, image or block opener: `## Title {.center icon=wheat}`, `![Photo](a.jpg){.round width=300}`, `::: cards {.steps}`. Inline: `:icon[clock]`, `:badge[new]`, `==highlight==`. A video file in image syntax plays on its own.
- `reactions: 👏 🤯 ❤️` lets the audience react at any time; `phone-welcome:` and `phone-thanks:` are what phones show between questions and at the end.

One interaction per slide, each with a stable id in `{#name}`:

```markdown
::: poll {#coffee chart=donut} Coffee or tea?
- Coffee
- [x] Tea              # [x] marks a right answer, revealed later

Optional text shown with the answer.
:::

::: multi {#uses} Pick several
- A
- B
:::

::: estimate {#keys} How many keys does a piano have?
answer: 88
min: 1
max: 1000
:::

::: rounds {#would} Would you let an AI do it?
options: Yes | No | Maybe
- Write your emails
- Pick your holiday
:::

::: sentence {#story} Once upon a time
max: 6
start: there | a | in
there: was | lived
*: and | the | .
:::

::: questions
:::
```

(Remove the `# ...` comments when you copy these.) `chart=` draws the results as `bars`, `columns`, `donut`, `pictogram`, `race` or `bubbles` (`strip`, `histogram`, `beeswarm`, `thermometer` for estimates; `list`, `wall`, `spotlight` for questions). The full reference is in the Quorum docs: https://jboixcampos.github.io/quorum/llms-full.txt

## Writing a component

Three components need no file: `countdown` (`seconds:`), `qr` (`url:`, `label:`) and `embed` (`url:`, an https link or an HTML file in this folder). For anything else:

A component is `components/<name>.js`, used as `::: component <name>`. The `key: value` lines become `ctx.params`. Add `audience:` (`text`, `number`, `choice` or `choices`) and phones get an input; the answers arrive in `ctx.answers.values` (and `ctx.answers.counts` for choices).

```markdown
::: component word-list {#words}
audience: text
prompt: One word for this topic?
examples: fast | simple | fun
:::
```

```js
// components/word-list.js
export default {
  mount(el, ctx) {
    const paint = (c) => {
      const values = (c.answers && c.answers.values) || [];
      el.textContent = values.join(', ') || 'Press the right arrow to open it.';
    };
    paint(ctx);
    return { update: paint };
  },
};
```

Keep anything that must look the same on the shared screen and the speaker's panel in `ctx.state` and change it with `ctx.setState({...})`. Start slow work (network calls, models) only when `ctx.where === 'screen'`. No dependencies and no build step: plain JavaScript modules.

## Rules

- **Never touch `.quorum/`**, and never show or share the presenter key or the presentation and panel links that contain it.
- **Do not invent facts or statistics.** An estimate with a reveal uses a well-known, verifiable fact, with its source in the reveal text.
- **One idea per slide, few words.** People read the screen and answer on their phones.
- **Make it look designed**: a theme, a mix of layouts and blocks, no long runs of bullet slides.
- Keep every interaction id unique and stable: renaming an id loses its votes.
- Run `quorum check --json` until `ok` is `true`.
