import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-low-exp-server-latin-america');
}

export default function ZuneraOtLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-low-exp-server-latin-america" />;
}
