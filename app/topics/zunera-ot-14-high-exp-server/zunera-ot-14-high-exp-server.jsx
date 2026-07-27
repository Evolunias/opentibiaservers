import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-high-exp-server');
}

export default function ZuneraOt14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-high-exp-server" />;
}
