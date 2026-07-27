import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-ots');
}

export default function XanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-ots" />;
}
