import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-europe');
}

export default function YurotsCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-europe" />;
}
