import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-mexico');
}

export default function XanteriaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-mexico" />;
}
