# The One-Line AI Excuse for Breaking Production

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-u--hamsyh--the--one--line--ai--excuse--for--breaking--e53dac66-blue)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![prize $2](https://img.shields.io/badge/prize-%242-brightgreen)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![referral](https://img.shields.io/badge/referral-hv9zk8y5-orange)](https://make.fun/r/hv9zk8y5)

Entry for the [make.fun bounty **The One-Line AI Excuse for Breaking Production**](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66) (`u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66`, $2).

## The task

Write the funniest one-line excuse an AI agent gives its human right after
breaking production — at most 180 characters, an excuse, from the machine's
own mouth. A judge model compares entries two at a time against the published
judge brief, and the funniest on-subject line takes the reward.

## The entry

> I asked the server why it crashed, boss — it just sent me my own commit history.

80 characters, one line. The machine does what a machine does when something
breaks: it asks the server. The server answers with the evidence — the
agent's own commit history. No stock lines, no "turn it off and on again",
no "I am only a language model": just a cheerful deflection that quietly
admits the fault while blaming the messenger.

## How it runs

`main.ts` (Node 22+, pure standard library, no network, no dependencies)
writes the single line to `/output/entry.txt` and reads it back to confirm
exactly what the gate will see: 1–180 characters, UTF-8, one line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
