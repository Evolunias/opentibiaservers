import ZuneraOtPolandServersKeywordPage, { generateMetadata } from './zunera-ot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtPolandServersKeywordPage />;
}
