import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-germany');
}

export default function XanteriaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-germany" />;
}
