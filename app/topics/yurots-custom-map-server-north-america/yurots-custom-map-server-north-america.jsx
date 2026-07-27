import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-north-america');
}

export default function YurotsCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-north-america" />;
}
