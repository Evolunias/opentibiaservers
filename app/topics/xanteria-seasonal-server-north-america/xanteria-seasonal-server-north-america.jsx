import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-north-america');
}

export default function XanteriaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-north-america" />;
}
