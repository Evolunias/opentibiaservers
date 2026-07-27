import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-poland');
}

export default function ZuneraOtPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-poland" />;
}
