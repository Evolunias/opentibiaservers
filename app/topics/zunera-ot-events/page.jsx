import ZuneraOtEventsKeywordPage, { generateMetadata } from './zunera-ot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtEventsKeywordPage />;
}
