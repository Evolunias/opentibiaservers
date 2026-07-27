import ZuneraOtOtsKeywordPage, { generateMetadata } from './zunera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtOtsKeywordPage />;
}
