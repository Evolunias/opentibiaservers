import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-latin-america');
}

export default function YurotsRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-latin-america" />;
}
