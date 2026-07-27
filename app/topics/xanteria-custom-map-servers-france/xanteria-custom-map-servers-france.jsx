import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-france');
}

export default function XanteriaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-france" />;
}
