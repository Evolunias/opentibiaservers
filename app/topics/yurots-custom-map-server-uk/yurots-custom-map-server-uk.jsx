import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-uk');
}

export default function YurotsCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-uk" />;
}
