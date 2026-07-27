import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-brazil');
}

export default function XanteriaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-brazil" />;
}
