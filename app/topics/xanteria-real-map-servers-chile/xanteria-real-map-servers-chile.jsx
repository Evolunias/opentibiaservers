import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-chile');
}

export default function XanteriaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-chile" />;
}
