import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-chile');
}

export default function XanteriaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-chile" />;
}
