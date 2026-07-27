import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-canada');
}

export default function YurotsCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-canada" />;
}
