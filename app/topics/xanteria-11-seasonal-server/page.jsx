import Xanteria11SeasonalServerKeywordPage, { generateMetadata } from './xanteria-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11SeasonalServerKeywordPage />;
}
