import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-chile');
}

export default function XanteriaPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-chile" />;
}
