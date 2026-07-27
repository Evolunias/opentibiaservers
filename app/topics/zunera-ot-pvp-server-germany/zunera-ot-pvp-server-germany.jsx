import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-germany');
}

export default function ZuneraOtPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-germany" />;
}
