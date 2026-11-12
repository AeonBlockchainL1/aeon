# Changelog

All notable changes to Aeon Chain are recorded here. Versions follow [Semantic Versioning](https://semver.org).

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
