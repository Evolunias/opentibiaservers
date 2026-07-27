import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-europe');
}

export default function ZuneraOtNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-europe" />;
}
