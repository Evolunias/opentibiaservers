import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp');
}

export default function XanteriaHighExpKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp" />;
}
