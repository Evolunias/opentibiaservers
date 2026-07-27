import Xanteria96SeasonalServerKeywordPage, { generateMetadata } from './xanteria-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria96SeasonalServerKeywordPage />;
}
