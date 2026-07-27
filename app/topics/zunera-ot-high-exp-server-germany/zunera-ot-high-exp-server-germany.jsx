import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-high-exp-server-germany');
}

export default function ZuneraOtHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-high-exp-server-germany" />;
}
