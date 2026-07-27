import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-uk');
}

export default function YurotsCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-uk" />;
}
