import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-enforced-server-argentina');
}

export default function YurotsPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-enforced-server-argentina" />;
}
