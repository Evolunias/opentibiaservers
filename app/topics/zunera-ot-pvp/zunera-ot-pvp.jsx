import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp');
}

export default function ZuneraOtPvpKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp" />;
}
