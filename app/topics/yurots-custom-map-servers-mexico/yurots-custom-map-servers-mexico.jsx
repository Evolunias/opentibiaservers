import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-mexico');
}

export default function YurotsCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-mexico" />;
}
