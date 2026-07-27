import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-high-exp-server-north-america');
}

export default function ZuneraOtHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-high-exp-server-north-america" />;
}
