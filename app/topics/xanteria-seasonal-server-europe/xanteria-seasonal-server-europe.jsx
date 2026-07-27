import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-europe');
}

export default function XanteriaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-europe" />;
}
