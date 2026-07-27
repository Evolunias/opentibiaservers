import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-usa');
}

export default function XanteriaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-usa" />;
}
