import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-france');
}

export default function XanteriaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-france" />;
}
