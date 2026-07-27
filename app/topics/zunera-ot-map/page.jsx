import ZuneraOtMapKeywordPage, { generateMetadata } from './zunera-ot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtMapKeywordPage />;
}
