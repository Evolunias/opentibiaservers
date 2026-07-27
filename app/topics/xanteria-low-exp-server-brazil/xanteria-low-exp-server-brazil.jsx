import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-brazil');
}

export default function XanteriaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-brazil" />;
}
