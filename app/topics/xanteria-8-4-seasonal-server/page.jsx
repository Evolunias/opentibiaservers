import Xanteria84SeasonalServerKeywordPage, { generateMetadata } from './xanteria-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria84SeasonalServerKeywordPage />;
}
