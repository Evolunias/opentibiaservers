import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-canada');
}

export default function XanteriaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-canada" />;
}
