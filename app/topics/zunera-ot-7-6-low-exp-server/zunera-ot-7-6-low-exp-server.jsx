import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-6-low-exp-server');
}

export default function ZuneraOt76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-6-low-exp-server" />;
}
