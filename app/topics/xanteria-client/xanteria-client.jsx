import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-client');
}

export default function XanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="xanteria-client" />;
}
