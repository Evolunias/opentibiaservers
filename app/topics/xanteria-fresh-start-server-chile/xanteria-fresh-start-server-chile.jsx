import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-chile');
}

export default function XanteriaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-chile" />;
}
