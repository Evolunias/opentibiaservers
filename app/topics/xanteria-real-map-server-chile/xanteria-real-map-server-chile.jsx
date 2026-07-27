import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-chile');
}

export default function XanteriaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-chile" />;
}
