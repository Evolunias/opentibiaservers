import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-brazil');
}

export default function YurotsCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-brazil" />;
}
