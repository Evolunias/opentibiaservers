import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-low-exp-server');
}

export default function Xanteria11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-low-exp-server" />;
}
