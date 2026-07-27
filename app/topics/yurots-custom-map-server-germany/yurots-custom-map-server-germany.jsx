import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-germany');
}

export default function YurotsCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-germany" />;
}
