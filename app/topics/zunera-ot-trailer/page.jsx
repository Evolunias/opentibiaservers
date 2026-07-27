import ZuneraOtTrailerKeywordPage, { generateMetadata } from './zunera-ot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtTrailerKeywordPage />;
}
