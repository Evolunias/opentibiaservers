import ZuneraOtSeasonKeywordPage, { generateMetadata } from './zunera-ot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtSeasonKeywordPage />;
}
