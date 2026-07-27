import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-chile');
}

export default function XanteriaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-chile" />;
}
