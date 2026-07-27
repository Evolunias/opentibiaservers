import XanteriaSpellsKeywordPage, { generateMetadata } from './xanteria-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSpellsKeywordPage />;
}
