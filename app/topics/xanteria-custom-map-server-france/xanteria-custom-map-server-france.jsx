import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-france');
}

export default function XanteriaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-france" />;
}
