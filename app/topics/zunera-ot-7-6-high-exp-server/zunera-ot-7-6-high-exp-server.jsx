import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-6-high-exp-server');
}

export default function ZuneraOt76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-6-high-exp-server" />;
}
