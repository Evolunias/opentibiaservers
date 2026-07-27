import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-chile');
}

export default function XanteriaPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-chile" />;
}
