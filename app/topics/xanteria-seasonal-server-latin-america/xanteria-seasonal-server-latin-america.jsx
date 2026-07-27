import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-latin-america');
}

export default function XanteriaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-latin-america" />;
}
