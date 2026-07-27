import ZuneraOtPolandServerKeywordPage, { generateMetadata } from './zunera-ot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtPolandServerKeywordPage />;
}
