import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-high-exp-server');
}

export default function ZuneraOt15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-high-exp-server" />;
}
