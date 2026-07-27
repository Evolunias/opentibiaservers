import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-seasonal-server-chile');
}

export default function XanteriaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-seasonal-server-chile" />;
}
