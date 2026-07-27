import Xanteria15SeasonalServerKeywordPage, { generateMetadata } from './xanteria-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15SeasonalServerKeywordPage />;
}
