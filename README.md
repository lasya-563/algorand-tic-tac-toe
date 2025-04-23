# Algorand Tic-Tac-Toe DApp

A simple decentralized Tic-Tac-Toe game built using Algorand Smart Contracts.

## Structure

- `contracts/`: TEAL smart contract code
- `frontend/`: Basic HTML/CSS/JS frontend
- `scripts/`: Deployment scripts using Algorand SDK

## Setup

1. Install dependencies:
   ```
   npm install algosdk
   ```

2. Update `scripts/deploy.js` with your token, port, and mnemonic.

3. Deploy smart contract:
   ```
   node scripts/deploy.js
   ```

4. Open `frontend/index.html` in a browser to play.
