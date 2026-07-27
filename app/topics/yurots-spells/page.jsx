import YurotsSpellsKeywordPage, { generateMetadata } from './yurots-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSpellsKeywordPage />;
}
