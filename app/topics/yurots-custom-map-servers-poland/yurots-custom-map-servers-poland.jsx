import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-poland');
}

export default function YurotsCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-poland" />;
}
