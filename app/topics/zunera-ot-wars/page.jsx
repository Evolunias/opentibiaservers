import ZuneraOtWarsKeywordPage, { generateMetadata } from './zunera-ot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtWarsKeywordPage />;
}
