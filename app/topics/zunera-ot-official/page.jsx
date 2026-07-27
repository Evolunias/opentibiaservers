import ZuneraOtOfficialKeywordPage, { generateMetadata } from './zunera-ot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtOfficialKeywordPage />;
}
