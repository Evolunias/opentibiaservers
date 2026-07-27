import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-latin-america');
}

export default function YurotsCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-latin-america" />;
}
