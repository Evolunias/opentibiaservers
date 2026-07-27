import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-high-exp-server');
}

export default function ZuneraOt100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-high-exp-server" />;
}
