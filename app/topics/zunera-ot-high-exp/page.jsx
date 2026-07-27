import ZuneraOtHighExpKeywordPage, { generateMetadata } from './zunera-ot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtHighExpKeywordPage />;
}
