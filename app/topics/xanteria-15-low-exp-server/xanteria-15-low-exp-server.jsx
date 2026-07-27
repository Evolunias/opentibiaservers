import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-low-exp-server');
}

export default function Xanteria15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-low-exp-server" />;
}
