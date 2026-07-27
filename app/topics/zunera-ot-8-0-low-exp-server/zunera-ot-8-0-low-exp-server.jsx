import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-0-low-exp-server');
}

export default function ZuneraOt80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-0-low-exp-server" />;
}
