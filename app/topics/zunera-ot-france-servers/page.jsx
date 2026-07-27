import ZuneraOtFranceServersKeywordPage, { generateMetadata } from './zunera-ot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtFranceServersKeywordPage />;
}
