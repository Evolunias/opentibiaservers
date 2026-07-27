import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-low-exp-server');
}

export default function Xanteria76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-low-exp-server" />;
}
