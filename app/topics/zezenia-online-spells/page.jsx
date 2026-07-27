import ZezeniaOnlineSpellsKeywordPage, { generateMetadata } from './zezenia-online-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineSpellsKeywordPage />;
}
