import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-no-reset-server-latin-america');
}

export default function ZuneraOtNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-no-reset-server-latin-america" />;
}
