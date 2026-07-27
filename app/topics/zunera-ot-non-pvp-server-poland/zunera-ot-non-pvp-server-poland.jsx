import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-poland');
}

export default function ZuneraOtNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-poland" />;
}
