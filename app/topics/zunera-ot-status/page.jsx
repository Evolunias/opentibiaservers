import ZuneraOtStatusKeywordPage, { generateMetadata } from './zunera-ot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtStatusKeywordPage />;
}
