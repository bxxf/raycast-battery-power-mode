# Set Battery Power Mode

Toggles between high/low power mode on macOS. This is particulary useful when need to switch between power modes quickly.

## Setup

You will need to follow few steps to make the extension run smoothly without asking for password each time.

Run this command in Terminal:

```bash
sudo EDITOR=nano visudo
```

Add the following line to the end of the file:

```
YOURUSERNAME ALL=(ALL) NOPASSWD: /usr/bin/pmset *
```

** Warning: This will allow your user to run `pmset` command without asking for password. Consider if this is not security threat for you. **

If you do not know your username run in Terminal this command

```bash
whoami
```

## Planned

- Automatic switching between power modes based on battery percentage and power source
- Menu bar interface with current power mode and toggle buttons
