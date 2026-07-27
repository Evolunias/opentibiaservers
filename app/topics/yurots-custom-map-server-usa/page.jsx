import YurotsCustomMapServerUsaKeywordPage, { generateMetadata } from './yurots-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCustomMapServerUsaKeywordPage />;
}
