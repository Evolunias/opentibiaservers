import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-low-exp-server');
}

export default function Xanteria12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-low-exp-server" />;
}
