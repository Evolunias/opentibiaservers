import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-enforced-server-europe');
}

export default function ZuneraOtPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-enforced-server-europe" />;
}
