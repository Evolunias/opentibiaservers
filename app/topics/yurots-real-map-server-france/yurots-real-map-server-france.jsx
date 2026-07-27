import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-france');
}

export default function YurotsRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-france" />;
}
