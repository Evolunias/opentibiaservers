import ZuneraOtSpellsKeywordPage, { generateMetadata } from './zunera-ot-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtSpellsKeywordPage />;
}
