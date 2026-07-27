import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-1-low-exp-server');
}

export default function ZuneraOt81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-1-low-exp-server" />;
}
