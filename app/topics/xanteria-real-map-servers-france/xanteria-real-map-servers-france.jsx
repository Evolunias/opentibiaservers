import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-france');
}

export default function XanteriaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-france" />;
}
