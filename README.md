# next-method-validation

A lightweight plugin for validating request methods in Next.js API handlers.

## Installation

```powershell
yarn add next-method-validation
```

OR

```powershell
npm i next-method-validation
```

## Usage

TypeScript usage:

```typescript
import { withMethodValidation } from "next-method-validation";

const handler: NextApiHandler = async (req, res) => {
  // ...
};

export default withMethodValidation(handler, "GET");
```
