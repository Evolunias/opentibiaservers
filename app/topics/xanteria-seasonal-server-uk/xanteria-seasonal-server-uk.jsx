import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-uk');
}

export default function XanteriaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-uk" />;
}
