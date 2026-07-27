import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvpe-server-chile');
}

export default function XanteriaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvpe-server-chile" />;
}
