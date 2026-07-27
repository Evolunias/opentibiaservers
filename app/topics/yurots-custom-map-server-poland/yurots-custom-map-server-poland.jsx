import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-poland');
}

export default function YurotsCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-poland" />;
}
