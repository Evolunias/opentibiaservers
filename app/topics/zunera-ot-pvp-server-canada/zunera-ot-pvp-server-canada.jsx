import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-canada');
}

export default function ZuneraOtPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-canada" />;
}
