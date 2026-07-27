import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-high-exp-server');
}

export default function ZuneraOt13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-high-exp-server" />;
}
