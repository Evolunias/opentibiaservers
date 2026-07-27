import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-0-pvp-enforced-server');
}

export default function ZuneraOt80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-0-pvp-enforced-server" />;
}
