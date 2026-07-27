import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-4-low-exp-server');
}

export default function ZuneraOt84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-4-low-exp-server" />;
}
