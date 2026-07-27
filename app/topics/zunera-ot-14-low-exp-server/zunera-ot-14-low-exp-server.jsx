import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-low-exp-server');
}

export default function ZuneraOt14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-low-exp-server" />;
}
