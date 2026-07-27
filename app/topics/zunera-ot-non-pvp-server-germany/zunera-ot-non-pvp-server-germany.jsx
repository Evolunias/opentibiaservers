import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-germany');
}

export default function ZuneraOtNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-germany" />;
}
