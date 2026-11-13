# Changelog

All notable changes to Aeon Chain are recorded here. Versions follow [Semantic Versioning](https://semver.org).

## [0.3.0-testnet] - 2026-11-12

### Added
- Payment proofs: the sender of a transaction can prove that one of its outputs pays a given address a given amount. A proof carries the output's derivation scalar, the commitment mask, the amount, an optional message of up to 140 characters and a Schnorr signature made with the transaction secret. It opens that single output and leaves the dead drop sealed.
- Wallet: a sent payments list with copy proof and check buttons, and a message field for the proof. The proving data stays on the sending device.
- Explorer: a check proof box and a `#/proof/…` page that verifies a proof in the browser against the transaction on chain.
- `buildTx` returns the proving secrets on a non-enumerable `secrets` property, so they are never serialised or sent to a node.
- 10 new unit checks and 3 new end-to-end checks for payment proofs. No consensus change: existing transactions and nodes are unaffected.

## [0.2.0-testnet] - 2026-11-12

### Added
- Dead drops: every new output carries a 160-byte sealed note (up to 140 bytes of text) encrypted with the output's shared secret, ML-KEM-768 on quantum addresses. Always present and fixed size, covered by the ring signatures, opened only by the receiver's wallet.
- Wallet: note field on the send form and a dead drops inbox. The faucet attaches a welcome note.
- Explorer shows the sealed note on each output. `GET /api/stats` reports `sealedNotes`.
- 12 new unit checks and 3 new end-to-end checks for notes. Transactions made before this release stay valid.

### Changed
- Upgrade name: the hash-based spend upgrade is called Meridian.

### Fixed
- Side padding on explorer, wallet, mine and docs pages at widths of 1280px and below.

## [0.1.0-testnet] - 2026-11-11

First public testnet.

### Added
- Private transactions: two-row MLSAG ring signatures over ristretto255 with a ring of 16, key images for double-spend protection.
- One-time stealth addresses for every output.
- Hidden amounts: Pedersen commitments with a 48-bit range proof per output and a commitment balance check.
- Quantum addresses (`aeonq1`): payment detection through ML-KEM-768 (FIPS 203).
- Argon2id proof of work at 8 MiB with per-block difficulty retargeting toward 30 seconds.
- Emission of `(100M − emitted) / 2^19` per block with a tail of 2.
- Block explorer with in-browser verification of any transaction.
- Browser wallet that keeps keys local, scans outputs and builds transactions.
- Browser miner and command-line miner.
- Testnet faucet.
- Unit tests for the cryptography and an end-to-end test, both run in CI.
