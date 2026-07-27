import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-low-exp-server');
}

export default function Xanteria1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-low-exp-server" />;
}
