import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-france');
}

export default function YurotsCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-france" />;
}
