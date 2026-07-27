import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-pvp-enforced-server');
}

export default function ZuneraOt14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-pvp-enforced-server" />;
}
