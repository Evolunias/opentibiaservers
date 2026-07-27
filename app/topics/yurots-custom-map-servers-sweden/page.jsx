import YurotsCustomMapServersSwedenKeywordPage, { generateMetadata } from './yurots-custom-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsCustomMapServersSwedenKeywordPage />;
}
