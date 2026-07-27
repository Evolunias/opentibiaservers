import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-low-exp-server');
}

export default function ZuneraOt100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-low-exp-server" />;
}
