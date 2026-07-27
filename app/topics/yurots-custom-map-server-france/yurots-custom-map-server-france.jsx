import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-france');
}

export default function YurotsCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-france" />;
}
