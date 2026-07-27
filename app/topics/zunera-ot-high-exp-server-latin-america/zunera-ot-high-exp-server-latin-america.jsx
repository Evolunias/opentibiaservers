import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-high-exp-server-latin-america');
}

export default function ZuneraOtHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-high-exp-server-latin-america" />;
}
