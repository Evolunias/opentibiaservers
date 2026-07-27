import Xanteria12SeasonalServerKeywordPage, { generateMetadata } from './xanteria-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria12SeasonalServerKeywordPage />;
}
