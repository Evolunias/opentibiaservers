import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-low-exp-server-germany');
}

export default function ZuneraOtLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-low-exp-server-germany" />;
}
