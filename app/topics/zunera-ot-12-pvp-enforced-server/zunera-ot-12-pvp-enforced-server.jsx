import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-pvp-enforced-server');
}

export default function ZuneraOt12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-pvp-enforced-server" />;
}
