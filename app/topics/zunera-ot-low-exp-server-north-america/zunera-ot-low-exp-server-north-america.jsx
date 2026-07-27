import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-low-exp-server-north-america');
}

export default function ZuneraOtLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-low-exp-server-north-america" />;
}
