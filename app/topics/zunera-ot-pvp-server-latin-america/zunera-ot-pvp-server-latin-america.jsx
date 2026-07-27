import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-latin-america');
}

export default function ZuneraOtPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-latin-america" />;
}
