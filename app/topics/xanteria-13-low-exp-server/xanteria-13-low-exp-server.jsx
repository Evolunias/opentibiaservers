import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-low-exp-server');
}

export default function Xanteria13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-low-exp-server" />;
}
