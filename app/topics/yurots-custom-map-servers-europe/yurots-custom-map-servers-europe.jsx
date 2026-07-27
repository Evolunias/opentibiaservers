import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-europe');
}

export default function YurotsCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-europe" />;
}
