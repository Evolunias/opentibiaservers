import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-france');
}

export default function YurotsRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-france" />;
}
