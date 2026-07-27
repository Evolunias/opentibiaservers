import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-north-america');
}

export default function YurotsCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-north-america" />;
}
