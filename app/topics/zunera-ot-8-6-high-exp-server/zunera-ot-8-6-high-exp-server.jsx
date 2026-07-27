import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-6-high-exp-server');
}

export default function ZuneraOt86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-6-high-exp-server" />;
}
