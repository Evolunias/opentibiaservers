import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-low-exp-server');
}

export default function ZuneraOt12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-low-exp-server" />;
}
