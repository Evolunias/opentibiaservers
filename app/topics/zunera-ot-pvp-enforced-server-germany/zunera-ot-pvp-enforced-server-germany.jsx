import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-enforced-server-germany');
}

export default function ZuneraOtPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-enforced-server-germany" />;
}
