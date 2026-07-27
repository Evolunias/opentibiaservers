import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-low-exp-server');
}

export default function Xanteria81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-low-exp-server" />;
}
