import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-high-exp-server');
}

export default function ZuneraOt11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-high-exp-server" />;
}
