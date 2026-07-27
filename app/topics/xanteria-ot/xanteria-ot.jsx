import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-ot');
}

export default function XanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="xanteria-ot" />;
}
