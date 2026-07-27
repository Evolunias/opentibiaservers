import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-usa');
}

export default function YurotsCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-usa" />;
}
