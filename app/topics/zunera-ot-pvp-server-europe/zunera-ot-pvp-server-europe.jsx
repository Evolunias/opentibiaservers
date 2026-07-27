import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-europe');
}

export default function ZuneraOtPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-europe" />;
}
