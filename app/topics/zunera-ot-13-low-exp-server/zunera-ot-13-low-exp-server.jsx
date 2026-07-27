import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-low-exp-server');
}

export default function ZuneraOt13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-low-exp-server" />;
}
