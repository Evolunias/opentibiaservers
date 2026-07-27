import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-latin-america');
}

export default function ZuneraOtNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-latin-america" />;
}
