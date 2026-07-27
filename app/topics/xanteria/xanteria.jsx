import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria');
}

export default function XanteriaKeywordPage() {
  return <StaticKeywordPage slug="xanteria" />;
}
