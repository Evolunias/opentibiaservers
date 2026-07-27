import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-high-exp-server-poland');
}

export default function ZuneraOtHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-high-exp-server-poland" />;
}
