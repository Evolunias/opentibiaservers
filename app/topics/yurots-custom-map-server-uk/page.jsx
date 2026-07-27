import YurotsCustomMapServerUkKeywordPage, { generateMetadata } from './yurots-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCustomMapServerUkKeywordPage />;
}
