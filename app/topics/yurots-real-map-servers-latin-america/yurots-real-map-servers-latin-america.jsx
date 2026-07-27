import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-latin-america');
}

export default function YurotsRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-latin-america" />;
}
