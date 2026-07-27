import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-argentina');
}

export default function XanteriaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-argentina" />;
}
