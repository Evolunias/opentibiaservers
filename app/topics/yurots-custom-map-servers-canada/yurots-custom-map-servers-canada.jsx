import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-canada');
}

export default function YurotsCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-canada" />;
}
