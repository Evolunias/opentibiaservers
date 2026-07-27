import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-low-exp-server');
}

export default function ZuneraOt11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-low-exp-server" />;
}
