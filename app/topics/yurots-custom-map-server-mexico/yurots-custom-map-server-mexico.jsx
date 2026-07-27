import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-mexico');
}

export default function YurotsCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-mexico" />;
}
