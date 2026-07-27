import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-north-america');
}

export default function YurotsPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-north-america" />;
}
