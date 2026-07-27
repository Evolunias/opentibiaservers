import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-low-exp-server');
}

export default function ZuneraOt15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-low-exp-server" />;
}
