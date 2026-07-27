import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-usa');
}

export default function YurotsCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-usa" />;
}
