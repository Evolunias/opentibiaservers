import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-poland');
}

export default function XanteriaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-poland" />;
}
