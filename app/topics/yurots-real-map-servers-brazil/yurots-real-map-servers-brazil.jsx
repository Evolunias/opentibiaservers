import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-brazil');
}

export default function YurotsRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-brazil" />;
}
