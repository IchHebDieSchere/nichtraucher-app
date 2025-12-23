# Project Structure

We're 5 people working on the same codebase. This structure prevents merge conflicts and makes collaboration easier.

## The Setup

```
src/
  your-name/          # Your folder - only you edit here
    components/
    screens/
    index.js          # Export stuff others can use

  shared/             # Stuff everyone uses (Button, Card, etc.)
    components/

  archive/            # Your trash/old code (not in git)
```

## How to Work Together

**Use others' stuff:**

```javascript
import { Button } from "@/shared/components"; // shared UI
import { AnalogEmergencyButton } from "@/zidane"; // Zidane's widget
```

**Rules:**

- ✅ Own your folder - only you edit files in it
- ✅ Use anyone's exports freely
- ❌ Don't edit someone else's folder (ask them to make changes)
- ✅ Shared stuff (used by 3+ people) goes in `shared/`

## Quick Start

1. Create your folder: `mkdir src/your-name`
2. Move your code into it
3. Create `index.js` to export your stuff
4. Archive old code in `src/archive/`
