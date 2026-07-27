import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-low-exp-server');
}

export default function ZuneraOt74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-low-exp-server" />;
}
