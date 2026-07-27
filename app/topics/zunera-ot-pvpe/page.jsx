import ZuneraOtPvpeKeywordPage, { generateMetadata } from './zunera-ot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtPvpeKeywordPage />;
}
