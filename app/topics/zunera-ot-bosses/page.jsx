import ZuneraOtBossesKeywordPage, { generateMetadata } from './zunera-ot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtBossesKeywordPage />;
}
