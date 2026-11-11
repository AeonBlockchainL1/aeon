# Contributing to Aeon Chain

Thanks for looking at the code. Aeon is a small codebase on purpose: one Node.js process, one shared cryptography module, no build step.

## Getting set up

Requires Node 24 or newer.

```bash
git clone https://github.com/AeonBlockchainL1/aeon
cd aeon
npm install
npm test            # cryptography unit tests, about 5 seconds
npm run test:e2e    # boots a node, mines, sends a private payment
npm start           # http://localhost:8288
```

## Where things live

| Path | What it is |
|---|---|
| `client/rct.js` | All transaction cryptography: MLSAG ring signatures, stealth outputs, Pedersen commitments, range proofs, ML-KEM. The node and the browser import this same file. |
| `server/index.js` | Node, consensus, mempool, HTTP API and static site |
| `server/worker.js` | Argon2id proof-of-work worker |
| `miner/miner.js` | Command-line miner |
| `client/*.html` | Explorer, wallet, browser miner, docs |
| `test/` | Unit tests and the end-to-end test |

## Branches

- `main` is what the public testnet runs.
- `dev` is where work lands first. Open pull requests against `dev`.

## Pull requests

- Keep each pull request to one change.
- Any change to `client/rct.js` or to transaction validation in `server/index.js` needs a test in `test/crypto.test.js` that fails without it.
- Run both test commands before opening the pull request. CI runs them again.
- Consensus changes (block format, proof of work, emission, ring size) need an issue first so the change can be discussed before code is written.

## Reporting security issues

Do not open a public issue for anything that breaks privacy or lets coins be forged or double-spent. See [SECURITY.md](SECURITY.md).

## License

By contributing you agree that your work is released under the BSD 3-Clause license in [LICENSE](LICENSE).
