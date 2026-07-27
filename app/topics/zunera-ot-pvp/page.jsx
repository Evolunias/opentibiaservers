import ZuneraOtPvpKeywordPage, { generateMetadata } from './zunera-ot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtPvpKeywordPage />;
}
