## Sendbird NextJS Demo

*Key pieces of info to get this to work*

1. Make sure to remove `node_modules` from the tsconfig.json file's include array, and add in `node_modules/@sendbird/uikit-react/index.d.ts` to the include array.
2. The SDK has to be loaded client side, so you need to use the NextJS dynamic import system. See `components/Chat.tsx` for an example.
3. The SDK you need is `@sendbird/uikit-react`