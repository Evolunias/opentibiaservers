import XanteriaExpRateKeywordPage, { generateMetadata } from './xanteria-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaExpRateKeywordPage />;
}
